import {Component, Injector} from '@angular/core';
import {ClienteService} from '../../service/cliente.service';
import {BaseComponent} from '../../class/commons-class/base.component';
import {StorageService} from '../../service/storage.service';
import {ClienteDTO} from "../../class/dto/cliente.dto";
import {DomSanitizer} from "@angular/platform-browser";
import {NavController} from "@ionic/angular";
// import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {API_CONFIG} from "../../config/api.config";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage extends BaseComponent {

  cliente: ClienteDTO;
  picture: string;
  profileImage;
  cameraOn: boolean = false;
  editImage: boolean = false;


  constructor(private injector: Injector,
              public navCtrl: NavController,
              public storage: StorageService,
              public clienteService: ClienteService,
              // private camera: Camera,
              public sanitizer: DomSanitizer) {
    super(injector);
  }

  ionViewDidLoad() {
    this.loadData();
  }

  loadData() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email)
        .subscribe(response => {
            this.cliente = response as ClienteDTO;
            this.getImageIfExists();
          },
          error => {
            if (error.status == 403) {
              this.navCtrl.navigateRoot('/home');
            }
          });
    } else {
      this.navCtrl.navigateRoot('/home');
    }
  }

  getImageIfExists() {
    this.clienteService.getImageFromBucket(this.cliente.id)
      .subscribe(response => {
          this.cliente.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.jpg`;
          this.blobToDataURL(response).then(dataUrl => {
            let str: string = dataUrl as string;
            this.profileImage = this.sanitizer.bypassSecurityTrustUrl(str);
          });
        },
        error => {
          this.profileImage = 'assets/imgs/avatar-blank.png';
        });
  }

  // https://gist.github.com/frumbert/3bf7a68ffa2ba59061bdcfc016add9ee
  blobToDataURL(blob) {
    return new Promise((fulfill, reject) => {
      let reader = new FileReader();
      reader.onerror = reject;
      reader.onload = (e) => fulfill(reader.result);
      reader.readAsDataURL(blob);
    })
  }

  getCameraPicture() {

    this.cameraOn = true;

    // const options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   encodingType: this.camera.EncodingType.PNG,
    //   mediaType: this.camera.MediaType.PICTURE
    // }
    //
    // this.camera.getPicture(options).then((imageData) => {
    //   this.picture = 'data:image/png;base64,' + imageData;
    //   this.cameraOn = false;
    // }, (err) => {
    //   this.cameraOn = false;
    // });
  }

  getGalleryPicture() {

    this.cameraOn = true;

    // const options: CameraOptions = {
    //   quality: 100,
    //   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   encodingType: this.camera.EncodingType.PNG,
    //   mediaType: this.camera.MediaType.PICTURE
    // }
    //
    // this.camera.getPicture(options).then((imageData) => {
    //   this.picture = 'data:image/png;base64,' + imageData;
    //   this.cameraOn = false;
    // }, (err) => {
    //   this.cameraOn = false;
    // });
  }

  sendPicture() {
    this.clienteService.uploadPicture(this.picture)
      .subscribe(response => {
          this.picture = null;
          this.getImageIfExists();
        },
        error => {
        });
  }

  cancel() {
    this.picture = null;
  }

  cart() {
    this.navCtrl.navigateRoot('/cart');
  }

  editarImagem() {
    if (this.editImage == false) {
      this.editImage = true;
    } else {
      this.editImage = false;
    }
  }


}

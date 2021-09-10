import {Component, Injector, Input} from '@angular/core';
import {BaseComponent} from '../../../../class/commons-class/base.component';
import {ProdutoService} from '../../../../service/produto.service';
import {Produto} from '../../../../class/produto';
import {API_CONFIG} from '../../../../config/api.config';
import {DomSanitizer} from '@angular/platform-browser';
import {PositionToast, ToastUtil} from '../../../../class/commons-class/toast.util';
import {ToastType} from '../../../../class/commons-class/toast.type';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'produto-cadastro-page',
  templateUrl: 'produto.cadastro.page.html',
  styleUrls: ['./produto.cadastro.page.scss']
})
export class ProdutoCadastroModalPage extends BaseComponent {
  @Input()
  produto: Produto = new Produto();


  title: string;
  editOrNew: string;

  //Variaveis Camera
  profileImage: any = '';
  cameraOn: boolean = false;
  picture: string;
  editImage: boolean = false;


  constructor(private injector: Injector,
              public sanitizer: DomSanitizer,
              private camera: Camera,
              private produtoService: ProdutoService) {
    super(injector);
  }

  init() {
    if (this.produto.nome) {
      this.title = 'Edição Produto';
      this.editOrNew = 'Editar Produto';
    } else {
      this.title = 'Cadastro Produto';
      this.editOrNew = 'Adicionar Produto';
      this.produto.idCliente = this.currentUser.id;
    }
  }

  backToList() {
    this.modalCtrl.dismiss('close');
  }

  removeProdut() {
    //TODO remove product
  }


  salvarProduto(produto: Produto) {
    if (this.validaCadastro()) {
      if (produto.id) {
        if (produto.imageUrl == null) {
          // produto.imageUrl = 'assets/imgs/imgNotFound.png';
        }

        this.produtoService.update(produto).subscribe(produtoEditado => {
          console.log('editou' + '-' + produtoEditado.nome);
          this.modalCtrl.dismiss(produto);
        });
      } else {
        this.produtoService.insert(produto).subscribe(produtoSalvo => {
          // this.produto.categoria = produtoSalvo.categoria;
          console.log('salvou' + '-' + produtoSalvo.nome);
          this.modalCtrl.dismiss(produto);
        });
      }

    } else {
      ToastUtil.presentToast(this.toastCtrl, 'Necessita dados', PositionToast.BOTTOM, ToastType.INFO, 500);
    }
  }


  validaCadastro() {
    //TODO VALIDAR

    return true;
  }

  //Camera ============================================================

  getImageIfExists() {
    this.produtoService.getImageFromBucket(this.produto.id)
      .subscribe(response => {
          this.produto.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.produto.id}.jpg`;
          this.blobToDataURL(response).then(dataUrl => {
            let str: string = dataUrl as string;
            this.profileImage = this.sanitizer.bypassSecurityTrustUrl(str);
          });
        },
        error => {
          this.profileImage = '/src/assets/imgs/logo.png';
        });
  }

  blobToDataURL(blob) {
    return new Promise((fulfill, reject) => {
      let reader = new FileReader();
      reader.onerror = reject;
      reader.onload = (e) => fulfill(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  getCameraPicture() {

    this.cameraOn = true;
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.picture = 'data:image/png;base64,' + imageData;
      this.cameraOn = false;
    }, (err) => {
      this.cameraOn = false;
    });
  }

  getGalleryPicture() {

    this.cameraOn = true;

    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.picture = 'data:image/png;base64,' + imageData;
      this.cameraOn = false;
    }, (err) => {
      this.cameraOn = false;
    });
  }

  sendPicture() {
    this.produtoService.uploadPicture(this.picture, this.produto.id)
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

  editarImagem() {
    if (this.editImage == false) {
      this.editImage = true;
    } else {
      this.editImage = false;
    }
  }

}

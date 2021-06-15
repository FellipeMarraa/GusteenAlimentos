import {Subscription} from 'rxjs';
import {Injector, Input, SimpleChanges} from '@angular/core';
import {AlertController, LoadingController, ModalController, NavController, ToastController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {IBaseComponent} from './i.base.component';

export abstract class BaseComponent implements IBaseComponent {

  protected alertCtrl: AlertController;
  protected toastCtrl: ToastController;
  protected navCtrl: NavController;
  protected modalCtrl: ModalController;
  protected router: Router;
  protected loadingCtrl: LoadingController;
  protected activatedRoute: ActivatedRoute;


  @Input()
  errorMessages: string[] = [];
  private userSubscription: Subscription;


  constructor(injector: Injector) {
    this.alertCtrl = injector.get(AlertController);
    this.toastCtrl = injector.get(ToastController);
    this.navCtrl = injector.get(NavController);
    this.router = injector.get(Router);
    this.modalCtrl = injector.get(ModalController);
    this.loadingCtrl = injector.get(LoadingController);
    this.activatedRoute = injector.get(ActivatedRoute);
  }

  init() {
  }

  destroy() {
  }

  ngAfterContentChecked(): void {
  }

  ngAfterContentInit(): void {
  }

  ngAfterViewChecked(): void {
  }

  ngAfterViewInit(): void {
  }

  ngDoCheck(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
    console.log('this.currentUserSubscription.unsubscribe();');
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    this.destroy();
  }

  ngOnInit(): void {
    this.init();
  }

}

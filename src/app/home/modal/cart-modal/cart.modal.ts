import {Component, Injector} from "@angular/core";
import {BaseComponent} from "../../../class/commons-class/base.component";

@Component({
  selector: 'cart-modal',
  templateUrl: 'cart.modal.html',
  styleUrls: ['./cart.modal.scss']
})
export class CartModal extends BaseComponent {


  constructor(private injector: Injector) {
    super(injector)
  }

  init() {

  }

  dismiss() {
  }


}

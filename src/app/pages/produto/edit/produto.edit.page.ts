import {Component, Injector} from "@angular/core";
import {BaseComponent} from "../../../class/commons-class/base.component";
import {ProdutoDTO} from "../../../class/dto/produto.dto";
import {CategoriaDTO} from "../../../class/dto/categoria.dto";
import {CategoriaService} from "../../../service/categoria.service";
import {ProdutoService} from "../../../service/produto.service";
import {PositionToast, ToastUtil} from "../../../class/commons-class/toast.util";
import {ToastType} from "../../../class/commons-class/toast.type";

@Component({
  selector: 'produto-page',
  templateUrl: 'produto.edit.page.html',
  styleUrls: ['./produto.edit.page.scss']
})
export class ProdutoEditPage extends BaseComponent {

  produto: ProdutoDTO;
  categorias: CategoriaDTO[] = [];

  constructor(private injector: Injector,
              private categoriaService: CategoriaService,
              private produtoService: ProdutoService) {
    super(injector);

    this.activatedRoute.queryParams.subscribe(params => {
      let returnedObject = this.router.getCurrentNavigation().extras.state;
      if (returnedObject) {
        this.produto = returnedObject.avaliacao;
      } else {
        this.produto = new ProdutoDTO();
      }
    });


  }

  init() {


    // this.carregaCategorias();
  }

  carregaCategorias() {
    this.categoriaService.findAll().subscribe((categoria) => {
      this.categorias = categoria;
    })
  }

  salvar() {

    if (this.validaCadastro()) {
      if (!this.produto.desconto) {
        this.produto.desconto = 100;
      }
      this.produto.idCliente = this.currentUser.id;
      this.produtoService.save(this.produto);
      // this.navCtrl.navigateForward(`/produtos/list`);

    } else {
      ToastUtil.presentToast(this.toastCtrl, "Necessita dados", PositionToast.BOTTOM, ToastType.INFO, 500);
    }
  }


  validaCadastro() {
    //TODO VALIDAR

    let erros: string[];
    if (!this.produto.nome) {
      erros.push("erros")
    }
    return true;
  }


  // onCategoriaChange(categoria: CategoriaDTO) {
  //   this.produto.categoria = categoria;
  // }


}

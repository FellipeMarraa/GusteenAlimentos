import {Component, Injector} from "@angular/core";
import {BaseComponent} from "../../class/commons-class/base.component";
import {ProdutoDTO} from "../../class/dto/produto.dto";
import {CategoriaDTO} from "../../class/dto/categoria.dto";
import {CategoriaService} from "../../service/categoria.service";
import {ProdutoService} from "../../service/produto.service";
import {PositionToast, ToastUtil} from "../../class/commons-class/toast.util";
import {ToastType} from "../../class/commons-class/toast.type";

@Component({
  selector: 'produto-page',
  templateUrl: 'produto.page.html',
  styleUrls: ['./produto.page.scss']
})
export class ProdutoPage extends BaseComponent {

  produto: ProdutoDTO = new ProdutoDTO();
  categorias: CategoriaDTO[] = [];

  constructor(private injector: Injector,
              private categoriaService: CategoriaService,
              private produtoService: ProdutoService) {
    super(injector);

  }

  init() {
    this.carregaCategorias();
  }

  carregaCategorias() {
    this.categoriaService.findAll().subscribe((categoria) => {
      this.categorias = categoria;
    })
  }

  cadastrar() {

    if (this.validaCadastro()) {
      if (!this.produto.desconto) {
        this.produto.desconto = 100;
      }
      this.produtoService.save(this.produto).subscribe((produto) => {
        this.produto = produto;
      }, error => {
        ToastUtil.presentToast(this.toastCtrl, "Erro no servidor", PositionToast.BOTTOM, ToastType.ERROR, 500);
      })
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


  onCategoriaChange(categoria: CategoriaDTO) {
    this.produto.categoria = categoria;
  }


}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmprestimoPage} from "./emprestimo.page";


const routes: Routes = [
  {
    path: '',
    component: EmprestimoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmprestimoPageRoutingModule {
}

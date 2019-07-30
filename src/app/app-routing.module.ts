import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LojaComponent } from './loja/loja.component';


const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent},
  { path: 'loja', component: LojaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

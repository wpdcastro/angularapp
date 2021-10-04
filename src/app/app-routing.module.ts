import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './pagina/contato/contato.component';
import { HomeComponent } from './pagina/home/home.component';
import { InfochamasComponent } from './pagina/infochamas/infochamas.component';
import { ListaComponent } from './pagina/lista/lista.component';

const routes: Routes = [
  {path: '', component: InfochamasComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'infochamas', component: InfochamasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ContatoComponent } from './pagina/contato/contato.component';
import { NavbarComponent } from './pagina/navbar/navbar.component';
import { ListaComponent } from './pagina/lista/lista.component';
import { HomeComponent } from './pagina/home/home.component';
import { InfochamasComponent } from './pagina/infochamas/infochamas.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    NavbarComponent,
    ListaComponent,
    HomeComponent,
    InfochamasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

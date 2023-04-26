import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import {FooterComponent} from './footer/footer.component';


import { RouterModule } from '@angular/router';


import{HttpClientModule} from '@angular/common/http';



import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { PersonaService } from './inicio-sesion/persona.service';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioSesionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      
      {path: '', component: InicioSesionComponent,pathMatch:'full'},
      
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

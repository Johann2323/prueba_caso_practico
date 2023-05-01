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
import { HomeComponent } from './home/home.component';
import { SegundoheaderComponent } from './segundoheader/segundoheader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioSesionComponent,
    HomeComponent,
    SegundoheaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      
      {path: '', component: InicioSesionComponent,pathMatch:'full'},
      {path: 'app-home', component: HomeComponent},
      
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

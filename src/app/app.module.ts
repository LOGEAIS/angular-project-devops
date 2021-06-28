import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {RouterModule, Routes} from '@angular/router';
import {InscriptionComponent} from './inscription/inscription.component';
import {OptionComponent} from './option/option.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

const appRoutes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'authentification', component: ConnexionComponent },
  { path: 'register', component: InscriptionComponent },
  { path: 'options', component: OptionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ConnexionComponent,
    InscriptionComponent,
    OptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

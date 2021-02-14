import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EtudesComponent } from './etudes/etudes.component';
import { CompetencesComponent } from './competences/competences.component';
import { CcontacteComponent } from './ccontacte/ccontacte.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EtudesComponent,
    CompetencesComponent,
    CcontacteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

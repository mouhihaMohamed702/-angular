import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CcontacteComponent } from './ccontacte/ccontacte.component';
import { CompetencesComponent } from './competences/competences.component';
import { EtudesComponent } from './etudes/etudes.component';  
  
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [

  {
    path: 'etudes', component: EtudesComponent
  },
  {
path: 'ccontacte', component : CcontacteComponent
  },
  {
    path: 'competences' , component : CompetencesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { PaixComponent } from './paix/paix.component';
import { VenteComponent } from './vente/vente.component';
import { AchatComponent } from './achat/achat.component';
import { RegisterComptableComponent } from './register-comptable/register-comptable.component';
import { ListcomptableComponent } from './listcomptable/listcomptable.component';
import { DemandeComponent } from './demande/demande.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'registerc', component: RegisterComptableComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'Client', component: BoardUserComponent , children:[{path:'listComptable' ,component: ListcomptableComponent}] },
  { path: 'Comptable', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  //{ path: 'lcomptable', component: ListcomptableComponent },

  { path: 'achat', component: AchatComponent },
  { path: 'vente', component: VenteComponent },
  { path: 'paix', component: PaixComponent },
  { path: 'demande/:id',  component: DemandeComponent},








  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

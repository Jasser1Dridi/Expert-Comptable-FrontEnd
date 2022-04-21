import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AchatComponent } from './achat/achat.component';
import { VenteComponent } from './vente/vente.component';
import { PaixComponent } from './paix/paix.component';
import { RegisterComptableComponent } from './register-comptable/register-comptable.component';
import { ListcomptableComponent } from './listcomptable/listcomptable.component';
import {DemandeComponent} from './demande/demande.component';
import { ListDemandeClientComponent } from './list-demande-client/list-demande-client.component';
import { ListDemandeComptablComponent } from './list-demande-comptabl/list-demande-comptabl.component';
import { ListFichiersComptableComponent } from './list-fichiers-comptable/list-fichiers-comptable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadFilesClientComponent } from './upload-files-client/upload-files-client.component';
import { UploadFileClientUploadingComponent } from './upload-file-client-uploading/upload-file-client-uploading.component';
import { EspaceMessagerieComponent } from './espace-messagerie/espace-messagerie.component';





@NgModule({
  declarations: [


    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AchatComponent,
    VenteComponent,
    PaixComponent,
    RegisterComptableComponent,
    ListcomptableComponent,
    DemandeComponent,
    ListDemandeClientComponent,
    ListDemandeComptablComponent,
    ListFichiersComptableComponent,
    UploadFilesClientComponent,
    UploadFileClientUploadingComponent,
    EspaceMessagerieComponent,





  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers:  [authInterceptorProviders
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

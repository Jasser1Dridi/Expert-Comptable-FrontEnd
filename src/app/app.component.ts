import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./../assets/ExternalCss.css']
})
export class AppComponent {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  
  showBoardUser=false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService,private route:Router) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_Comptable');
      
      this.showBoardUser= this.roles.includes('ROLE_Client');
      this.username = user.username;

    }
  }
  logout(): void {

    this.route.navigate(['/home']).then(r => { this.tokenStorageService.signOut(); window.location.reload();});



  }







}

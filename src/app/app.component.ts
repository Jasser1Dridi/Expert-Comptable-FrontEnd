import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showAchat= false;
  showVente=false;
  showPaix=false;
  showBoardUser=false;
  username?: string;
  
  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAchat= this.roles.includes('ROLE_Client');
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_Comptable');
      this.showPaix= this.roles.includes('ROLE_Client');
      this.showVente= this.roles.includes('ROLE_Client');
      this.showBoardUser= this.roles.includes('ROLE_Client');
      this.username = user.username;

    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  
  
  
  
  
  
  
}

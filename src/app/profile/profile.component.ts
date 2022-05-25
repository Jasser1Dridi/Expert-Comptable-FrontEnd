import { Component, NgModule, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

import { AuthService } from  '../services/auth.service';
import { FormsModule }   from '@angular/forms';

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  currentUser: any;
 
  isLoggedIn = false;
  isLoginFailed = false;
  
  
 
  username?: string;
 
  
  user :any;
  
  roles: string[] = [];
  id:any;
  constructor(private tokenStorageService: TokenStorageService,private authService: AuthService,private router: ActivatedRoute, private service: UserService, private route: Router,private token: TokenStorageService) { localStorage.clear();}
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  this.id=this.currentUser.id;
    this.service.getUserById(this.id ).subscribe(result =>{
      this.user = result;
      console.log(this.user);
    });
  }
  onSubmit(): void {
  console.log(JSON.stringify(this.user.roles[0].name));
  if (this.user.roles[0].name =="ROLE_Comptable")  {
      this.service.EditComptable(this.id, this.user).subscribe(result => {    
    console.log(result +"SUCCES UPDATE <<<COMPTABLE>>>");
    this.route.navigate(['component/profile']);
    alert("Vous avez modifié le comptable avec succées");

      });
  }
  else if (this.user.roles[0].name =="ROLE_Client") {
    this.service.EditClient(this.id, this.user).subscribe(result => {    
      console.log(result +"SUCCES UPDATE <<<Client>>>");
      this.route.navigate(['component/profile']);
      alert("Vous avez modifié le client avec succées");
        });
  }
  else {
    this.service.EditUser(this.id, this.user).subscribe(result => {    
      console.log(result +"SUCCES UPDATE <<<ADMIN>>>");
      this.route.navigate(['component/profile']);
      alert("Vous avez modifié le admin avec succées");
        });
  }
    }
}






/*import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  constructor(private token: TokenStorageService) { }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
getUser(){





}
}
*/





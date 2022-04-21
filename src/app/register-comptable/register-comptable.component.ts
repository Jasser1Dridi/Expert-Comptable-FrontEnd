import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from "@angular/router";
import {TokenStorageService} from "../services/token-storage.service";
@Component({
  selector: 'app-register-comptable',
  templateUrl: './register-comptable.component.html',
  styleUrls: ['./register-comptable.component.css','./../../assets/ExternalCss.css']
})
export class RegisterComptableComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null,
    numero_telephone : null,
    adresse : null,
    ecole_sperieur: null,
  };
  roles : string[]=[];
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private rout : Router,private tokenStorage: TokenStorageService  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password , numero_telephone, adresse , ecole_sperieur } = this.form;
    console.log(this.form)
    this.authService.registerc(this.form).subscribe({
      next: data => {
        this.authService.login(username, password).subscribe({
          next: data1 => {
            this.tokenStorage.saveToken(data1.accessToken);
            this.roles = this.tokenStorage.getUser().roles;

            console.log(this.roles = this.tokenStorage.getUser().roles)
            console.log(this.tokenStorage.getToken());
            this.tokenStorage.saveUser(data1);

            this.isSignUpFailed = false;
            //   this.isLoggedIn = true
          }})
        console.log(data);
        this.isSignUpFailed = false;
        this.rout.navigate(['/Comptable']).then(value => {     window.location.reload();
         });
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }



}

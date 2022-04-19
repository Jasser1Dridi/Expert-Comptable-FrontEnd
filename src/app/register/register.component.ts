import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { FileUploadService } from '../services/file-upload.service';
import {Router} from "@angular/router";
import {TokenStorageService} from "../services/token-storage.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','./../../assets/ExternalCss.css']
})
export class RegisterComponent implements OnInit {
  roles: string[] = [];
  form: any = {
    username: null,
    email: null,
    password: null,
    nom_entreprise : null,
  };


  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService,private rout :Router,private tokenStorage: TokenStorageService  ) { }


  ngOnInit(): void {



  }
  onSubmit(): void {


    const { username, email, password , nom_entreprise } = this.form;
    console.log(this.form)
    this.authService.register(this.form).subscribe({
      next: data => {
        this.authService.login(username, password).subscribe({
          next: data=> {
               this.roles = this.tokenStorage.getUser().roles;
                this.tokenStorage.saveToken(data.accessToken);
                console.log(this.roles = this.tokenStorage.getUser().roles)
               console.log(this.tokenStorage.getToken());
               this.tokenStorage.saveUser(data);
               this.rout.navigate(['/Comptable']);
               this.isSignUpFailed = false;
         //   this.isLoggedIn = true
          }});
        console.log(data);




      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}

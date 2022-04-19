import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from "@angular/router";
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
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private rout : Router ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password , numero_telephone, adresse , ecole_sperieur } = this.form;
    console.log(this.form)
    this.authService.registerc(this.form).subscribe({
      next: data => {
        console.log(data);
        this.isSignUpFailed = false;
        this.rout.navigate(['/Comptable']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }



}

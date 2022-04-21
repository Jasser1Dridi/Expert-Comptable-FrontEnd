import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listcomptable',
  templateUrl: './listcomptable.component.html',
  styleUrls: ['./listcomptable.component.css','./../../assets/Table_Fixed_Header/fonts/font-awesome-4.7.0/css/font-awesome.min.css','./../../assets/Table_Fixed_Header/vendor/animate/animate.css','./../../assets/Table_Fixed_Header/vendor/select2/select2.min.css','./../../assets/Table_Fixed_Header/vendor/perfect-scrollbar/perfect-scrollbar.css','./../../assets/Table_Fixed_Header/css/util.css','./../../assets/Table_Fixed_Header/css/main.css','./../../assets/SCSS_File.scss']
})
export class ListcomptableComponent implements OnInit {

  comp!: any[];
  private _route: any;


  constructor(
      private  httpClient: HttpClient,

      ) { }



  ngOnInit(): void {
    this.getComptaple();

  }
  getComptaple(){
    this.httpClient.get<any>('http://localhost:8080/api/auth/comptablee').subscribe(
    response => {
        console.log(response);
        this.comp = response;
      }
    );
  }




  }







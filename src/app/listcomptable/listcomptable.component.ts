import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listcomptable',
  templateUrl: './listcomptable.component.html',
  styleUrls: ['./listcomptable.component.css']
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
    this.httpClient.get<any>('http://localhost:8080/api/auth/comptable').subscribe(
    response => {
        console.log(response);
        this.comp = response;
      }
    );
  }

 
    

  }

  
  




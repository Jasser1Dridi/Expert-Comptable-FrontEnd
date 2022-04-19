import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css', './../../assets/SCSS_File.scss']
})
  export class BoardModeratorComponent implements OnInit {

    listDemande: any  ;

  constructor( private httpClient:HttpClient) { }

  ngOnInit(): void {
  }
  getDemandes(){
    var url="http://localhost:8080/api/auth/comptable"
    this.httpClient.get<any>(url).subscribe(
      response => {
        console.log(response);
        this.listDemande = response;
      }
    );
  }
  onAccepter(){
    var url="http://localhost:8080/api/auth/comptable"
    this.httpClient.get<any>(url).subscribe(
      response => {
        console.log(response);

      }
    );
  }
  onRefuse(){
    var url="http://localhost:8080/api/auth/comptable"
    this.httpClient.get<any>(url).subscribe(
      response => {
        console.log(response);

      }
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  users!:any[];
  private _route: any;
  block: any;
  id: any;
  constructor( private  httpClient: HttpClient,  private service: UserService) { }
  
  
  ngOnInit(): void {
    this.getComptable();

  }
  
  
  getComptable(){
    this.httpClient.get<any>('http://localhost:8080/api/auth/comptablee').subscribe(
    response => {
        console.log(response);
        this.users = response;
      }
      );
    }
    

    onBloque(id:number , block: number){
      this.service.BlockUser(id, block).subscribe(result => {
        block == 1 ? alert("Vous avez bloquée l'utilisateur !!") :  alert("Vous avez débloquée l'utilisateur !!");
        window.location.reload();
          });
     
    }
}

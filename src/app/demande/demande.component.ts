import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListcomptableComponent } from '../listcomptable/listcomptable.component';
import { TokenStorageService } from '../services/token-storage.service';
import {UserService} from "../services/user.service";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
 clicked=false;
 ComptableObject:any;
 duree:string="";
  constructor(
  private route: ActivatedRoute , private userService:UserService, private tokenStorage: TokenStorageService
  ){}

ngOnInit(): void {
  this.GetUserById(this.route.snapshot.params['id']);

}

   onSumbit()
   {
     this.clicked=true;
     console.log(this.tokenStorage.getUser().id);
    console.log(this.ComptableObject.id);
    console.log(this.tokenStorage.getUser());
     this.userService.saveDemande(this.ComptableObject.id,this.tokenStorage.getUser().id,Number(this.duree)).subscribe(value => {console.log(value)})
    }

  GetUserById(id:string)
    {
this.userService.getUserById(id).subscribe(value => {this.ComptableObject=value;console.log(this.ComptableObject)});
         }



}





















function id(id: any): [any] {
  throw new Error('Function not implemented.');
}


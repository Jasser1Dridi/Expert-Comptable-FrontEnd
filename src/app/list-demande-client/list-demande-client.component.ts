import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {TokenStorageService} from "../services/token-storage.service";

@Component({
  selector: 'app-list-demande-client',
  templateUrl: './list-demande-client.component.html',
  styleUrls: ['./list-demande-client.component.css','./../../assets/SCSS_File.scss']
})
export class ListDemandeClientComponent implements OnInit {

  listDemande:any;
  constructor(private userService:UserService,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void
  {
    this.GetList_Client_Demande()
  }

  GetList_Client_Demande()
  {
    this.userService.GetList_Client_Demande(this.tokenStorage.getUser().id).subscribe(value => {this.listDemande=value;console.log(value)})
  }


}

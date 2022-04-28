import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {TokenStorageService} from "../services/token-storage.service";

@Component({
  selector: 'app-list-demande-comptabl',
  templateUrl: './list-demande-comptabl.component.html',
  styleUrls: ['./list-demande-comptabl.component.css','./../../assets/Table_Fixed_Header/fonts/font-awesome-4.7.0/css/font-awesome.min.css','./../../assets/Table_Fixed_Header/vendor/animate/animate.css','./../../assets/Table_Fixed_Header/vendor/select2/select2.min.css','./../../assets/Table_Fixed_Header/vendor/perfect-scrollbar/perfect-scrollbar.css']
})
export class ListDemandeComptablComponent implements OnInit {

  constructor(private userService:UserService,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    console.log(this.tokenStorage.getUser().id)
    this.getAllDemandeForComptable(this.tokenStorage.getUser().id);
  }

  listDemande: any  ;
  alreadyAccepted=false;








  onAccepter(id:number)
  {
      this.userService.onAccepter(id).subscribe(value => {window.location.reload();console.log(value)});
  }

  onRefuse(id:number)
  {
    this.userService.onRefuse(id).subscribe(value => {window.location.reload();console.log(value)});

  }

  getAllDemandeForComptable(id:number)
{
  this.userService.GetList_Demande_Associated_With_Comptable(id).subscribe(value => {
    
    this.listDemande=value;
    this.listDemande.forEach((element: { [x: string]: Object; id: number; }) => {
      this.userService.getUserNameByIdDemande(element.id).subscribe(value =>{element['client']=value})
     
      
    });
    
    console.log(value)});

}

getUserNameByIdDemande(id:number)
{
  this.userService.getUserNameByIdDemande(id)
  {

  }
}
}

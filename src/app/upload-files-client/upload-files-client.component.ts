import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FileUploadService} from "../services/file-upload.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-upload-files-client',
  templateUrl: './upload-files-client.component.html',
  styleUrls: ['./upload-files-client.component.css','./../../assets/Table_Fixed_Header/fonts/font-awesome-4.7.0/css/font-awesome.min.css','./../../assets/Table_Fixed_Header/vendor/animate/animate.css','./../../assets/Table_Fixed_Header/vendor/select2/select2.min.css','./../../assets/Table_Fixed_Header/vendor/perfect-scrollbar/perfect-scrollbar.css','./../../assets/Table_Fixed_Header/css/util.css','./../../assets/Table_Fixed_Header/css/main.css','./../../assets/SCSS_File.scss']
})
export class UploadFilesClientComponent implements OnInit {


  constructor(private uploadService: FileUploadService,private userService:UserService) { }
  ngOnInit(): void {
    this.GetList_Comptable_Associated_With_Comptable();

    // recuperer la liste des comptables associe a cet client
    // requete "/api/auth/client/comptable"
    // mettre la liste des comptables dans un tableau pour afficher dans liste deroulante
    // comptable.user.id != comptable.id
  }

  ListComptable:any;
  GetList_Comptable_Associated_With_Comptable()
  {
    this.userService.GetList_Comptable_Associated_With_Comptable(2).subscribe(value => { this.ListComptable=value;  console.log(value)      }  )
  }
}

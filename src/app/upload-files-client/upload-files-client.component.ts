import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FileUploadService} from "../services/file-upload.service";
import {HttpClient, HttpEventType, HttpResponse} from "@angular/common/http";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-upload-files-client',
  templateUrl: './upload-files-client.component.html',
  styleUrls: ['./upload-files-client.component.css','./../../assets/Table_Fixed_Header/fonts/font-awesome-4.7.0/css/font-awesome.min.css','./../../assets/Table_Fixed_Header/vendor/animate/animate.css','./../../assets/Table_Fixed_Header/vendor/select2/select2.min.css','./../../assets/Table_Fixed_Header/vendor/perfect-scrollbar/perfect-scrollbar.css','./../../assets/Table_Fixed_Header/css/util.css','./../../assets/Table_Fixed_Header/css/main.css','./../../assets/SCSS_File.scss']
})
export class UploadFilesClientComponent implements OnInit {

 compp!: any[]
 private _route: any;
  constructor(private uploadService: FileUploadService,private  httpClient: HttpClient) { }
 
  ngOnInit(): void {
    this.GetComptableofClient();}

    // recuperer la liste des comptables associe a cet client
    // requete "/api/auth/client/comptable"
    // mettre la liste des comptables dans un tableau pour afficher dans liste deroulante
    // comptable.user.id != comptable.id
  

  
  GetComptableofClient()
  {
    this.httpClient.get<any>('http://localhost:8080/api/auth/client/comptable').subscribe(
    response => {
        console.log(response);
        this.compp = response;
      }
    );
  }

 
}
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-upload-declaration',
  templateUrl: './upload-declaration.component.html',
  styleUrls: ['./upload-declaration.component.css']
})
export class UploadDeclarationComponent implements OnInit {

  CLIENT!: any[]
 private _route: any;
  constructor(private uploadService: FileUploadService,private  httpClient: HttpClient) { }
 
  ngOnInit(): void {
    this.GetClientofComptable();}

  

  
    GetClientofComptable()
  {
    this.httpClient.get<any>('http://localhost:8080/api/auth/client/client').subscribe(
    response => {
        console.log(response);
        this.CLIENT = response;
      }
    );
  }

 
}

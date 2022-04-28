import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FileUploadService} from "../services/file-upload.service";
import {UserService} from "../services/user.service";
import {HttpClient, HttpEventType, HttpParams, HttpResponse} from "@angular/common/http";
import { TokenStorageService } from '../services/token-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload-file-client-uploading',
  templateUrl: './upload-file-client-uploading.component.html',
  styleUrls: ['./upload-file-client-uploading.component.css','./externalSCSS.scss']
})
export class UploadFileClientUploadingComponent implements OnInit {
  
  RecipientObject:any;
  type:string="";
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  
  
  
  
  constructor(private uploadService: FileUploadService ,private httpClient : HttpClient, private tokenStorage: TokenStorageService, private route: ActivatedRoute , private userService:UserService,
    ){}
  ngOnInit(): void {
    this.GetUserById(this.route.snapshot.params['id']);
    this.GetComptableofClient();

  }
  

    GetUserById(id:string)
    {
this.userService.getUserById(id).subscribe(value => {this.RecipientObject=value;console.log(this.RecipientObject)});
         }












  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }


  compp:any;
  GetComptableofClient()
  {
  console.log(this.route.snapshot.params['id']);
 let  headerss  = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.tokenStorage.getUser().accessToken}`
  }
    let param = new HttpParams().set("id",this.route.snapshot.params['id'] );
    this.httpClient.get<any>('http://localhost:8080/api/auth/client/demande',{params:param,headers:headerss}).subscribe(
    response => {
        console.log(response);
        this.compp = response;
      }
    );
  }

  upload(): void {





    
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile,this.route.snapshot.params['id'],this.type,this.compp[0].id).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles();
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }
  }
}

















// recuperer la liste des comptables associe a cet client
    // requete "/api/auth/client/comptable"
    // mettre la liste des comptables dans un tableau pour afficher dans liste deroulante
    // comptable.user.id != comptable.id
   
  
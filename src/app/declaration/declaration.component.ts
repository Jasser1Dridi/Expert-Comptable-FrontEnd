import { HttpClient, HttpEventType, HttpParams, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DeclarServiceService } from '../declar-service.service';
import { FileUploadService } from '../services/file-upload.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit {


  RecipientObject:any;
  type:string="";
  nameD:string="";
  Montant:string="";
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  
  

  
  constructor(private uploadService: DeclarServiceService ,private httpClient : HttpClient, 
   private tokenStorage: TokenStorageService, private route: ActivatedRoute , private userService:UserService,
    ){}
  ngOnInit(): void {
    this.GetUserById(this.route.snapshot.params['id']);
    this.GetClientofComptable();

  }
  

    GetUserById(id:string)
    {
this.userService.getUserById(id).subscribe(value => {this.RecipientObject=value;console.log(this.RecipientObject)});
         }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }


  cln:any;
  GetClientofComptable()
  {
  console.log(this.route.snapshot.params['id']);
 let  headerss  = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.tokenStorage.getUser().accessToken}`
  }
    let param = new HttpParams().set("id",this.route.snapshot.params['id'] );
    this.httpClient.get<any>('http://localhost:8080/api/auth/client/client',{params:param,headers:headerss}).subscribe(
    response => {
        console.log(response);
        this.cln = response;
      }
    );
  }

  uploadd(): void {

    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.uploadd(this.currentFile,this.route.snapshot.params['id'],this.type ,this.cln[0].id,this.Montant,this.RecipientObject).subscribe(
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
      

 



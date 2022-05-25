import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-document-partager',
  templateUrl: './document-partager.component.html',
  styleUrls: ['./document-partager.component.css']
})
export class DocumentPartagerComponent implements OnInit {
  
  constructor(private userService:UserService, private tokenStorage: TokenStorageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log(this.tokenStorage.getUser().id)
    this.getAllfichierpartager(this.tokenStorage.getUser().id);
  }

  listfichier: any  ;
  



  traiter(id:number)
  {
      this.userService.traiter(id).subscribe(value => {console.log(value)});
  }

  Encours(id:number)
  {
    this.userService.Encours(id).subscribe(value => {window.location.reload();console.log(value)});

  }



  fileUrl : any;
  getAllfichierpartager(id:number)
  {
    this.userService.GetList_fichier_partager_With_Comptable(id).subscribe(value => {
      
      this.listfichier=value;
     
     
      
      console.log(value)
      

    })
  }
  
    getFile(f:any,filename:string){

      const data = f;
      var byteCharacters = atob(f);
   var byteNumbers = new Array(byteCharacters.length);
   for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
   }
   var byteArray = new Uint8Array(byteNumbers);
   let fileExten=filename.substring(filename.indexOf('.'));
   console.log(fileExten)
let type="";
   if(fileExten== '.pdf')
   {
     type="application/pdf"
   }

  if(fileExten=='.docx')
  {
    type='application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  }
  if(fileExten=='.png')
  {
    type="image/png"
  }

   var blob = new Blob([byteArray], {type: type});
   var fileURL = URL.createObjectURL(blob);
   window.open(fileURL, '_blank');
      console.log(f)
    }
     
}





import { Component, OnInit } from '@angular/core';
import {FileUploadService} from "../services/file-upload.service";

@Component({
  selector: 'app-list-fichiers-comptable',
  templateUrl: './list-fichiers-comptable.component.html',
  styleUrls: ['./list-fichiers-comptable.component.css']
})

export class ListFichiersComptableComponent implements OnInit {

  constructor(private fileService:FileUploadService) {this.getListFichiers(); }
  list_Files:any;
  ngOnInit(): void {
  }

  getListFichiers()
  {
      this.fileService.getFiles().subscribe(value => { this.list_Files=value;console.log(value)});
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-demande-client',
  templateUrl: './list-demande-client.component.html',
  styleUrls: ['./list-demande-client.component.css','./../../assets/SCSS_File.scss']
})
export class ListDemandeClientComponent implements OnInit {

  listDemande=[];
  constructor() { }

  ngOnInit(): void
  {

  }



}

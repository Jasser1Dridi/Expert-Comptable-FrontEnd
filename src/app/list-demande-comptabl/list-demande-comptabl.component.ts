import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-demande-comptabl',
  templateUrl: './list-demande-comptabl.component.html',
  styleUrls: ['./list-demande-comptabl.component.css']
})
export class ListDemandeComptablComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listDemande: any  ;

  onAccepter() {

  }

  onRefuse() {

  }
}

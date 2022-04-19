import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListcomptableComponent } from '../listcomptable/listcomptable.component';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {


 comptable!: { id: string; username: string; };

  constructor(
  private route: ActivatedRoute ,
  ){}

ngOnInit(): void {
 this.comptable = {
    id: this.route.snapshot.params['id'],
    username:this.route.snapshot.params['username']};}


  onSumbit()
  {

  }







  }





















function id(id: any): [any] {
  throw new Error('Function not implemented.');
}


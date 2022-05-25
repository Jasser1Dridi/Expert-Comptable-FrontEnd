import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenStorageService} from "./token-storage.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessagesSpaceService {
  headerss = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.tokenStorage.getUser().accessToken}`
  }
  constructor(private http: HttpClient,private tokenStorage: TokenStorageService) { }


  createThread(sujet: string,): Observable<any> {
    return this.http.post(' http://localhost:8080/api/auth/thread/create' ,{ "sujet":sujet},{headers:this.headerss} ) ;
  }
  getList_All_Comptable()
  {
    return this.http.get(`http://localhost:8080/api/auth/client/comptable`,{ headers:this.headerss });
  }
  getThreades(): Observable<any> {
    return this.http.get(' http://localhost:8080/api/auth/thread/index' ,{headers:this.headerss} ) ;
  }
  getReciverId(threadId:number): Observable<any> {
    return this.http.get(' http://localhost:8080/api/auth/getReciverId' ,{params : { "idT":threadId },headers:this.headerss} ) ;
  }

  saveMessage(sujet:string,threadId:number,idReciever:number): Observable<any> {
    return this.http.post(' http://localhost:8080/api/auth/message/create' ,{ "contenu":sujet,"thread":threadId,"reciever":idReciever},{headers:this.headerss} ) ;

  }
  getMessages(threadId:number): Observable<any> {
    return this.http.get(' http://localhost:8080/api/auth/thread/getMessages' ,{params :{ "idT":threadId },headers:this.headerss} ) ;

  }

  existReceiver(threadId: any): Observable<any> {
      return this.http.get(' http://localhost:8080/api/auth/existReciver' ,{params :{ "idT":threadId },headers:this.headerss} ) ;

    }

  getReceiverUsername(userId: any): Observable<any> {
    return this.http.get(' http://localhost:8080/api/auth/getReciverUsername' ,{params :{ "idT":userId },headers:this.headerss} ) ;

  }
  getThreadesComptable(): Observable<any> {
    return this.http.get('   http://localhost:8080/api/auth/thread/getThreadesComptable' ,{headers:this.headerss} ) ;

  }
  getSender(idT : number): Observable<any> {
    return this.http.get('   http://localhost:8080/api/auth/getSender' ,{params : { "idT": idT} ,headers:this.headerss} ) ;

  }

}

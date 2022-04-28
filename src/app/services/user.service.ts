import { Injectable } from '@angular/core';
import {HttpClient, HttpParams,} from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import {TokenStorageService} from "./token-storage.service";
const API_URL = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class UserService {






   headerss = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.tokenStorage.getUser().accessToken}`
  }
  constructor(private http: HttpClient,private tokenStorage: TokenStorageService ) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'Client', { responseType: 'text' });
  }

getAchat(): Observable<any> {
return this.http.get(API_URL + 'Client' ,{responseType: 'text'} ) ;
}


getvente(): Observable<any> {
  return this.http.get(API_URL + 'Client' ,{responseType: 'text'} ) ;
  }

  getPaix(): Observable<any> {
    return this.http.get(API_URL + 'Client' ,{responseType: 'text'} ) ;
    }


  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'Comptable', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }



  getUserById( id:string): Observable<any> {

    return this.http.get(API_URL + `users/${id}`, {params:{'id':id}, responseType: 'json' });
  }
  saveDemande(comptableId:string,userId:string,duree:number)
  {
    console.log(comptableId);
    console.log(userId);
    console.log(duree);
    return this.http.post(API_URL + `save`,{'idC':userId,'idComp':comptableId,'duree':duree},{ headers:this.headerss});
  }



  GetList_Comptable_Associated_With_Comptable(comptableId:number)
  {
       return this.http.get(`http://localhost:8080/api/auth/demande/comptable`,{ params:{"request":comptableId}});
  }

  onAccepter(idDemande:number)
  {
    return this.http.put(`http://localhost:8080/api/auth/demande/comptable/accept`,{ idDemande :idDemande },{headers:this.headerss})
  }

  onRefuse(id: number)
  {
    return this.http.put(`http://localhost:8080/api/auth/demande/comptable/refuse`,{ idDemande :id },{headers:this.headerss})
  }

  GetList_Client_Demande(id:number)
  {
    return this.http.get(`http://localhost:8080/api/auth/demande/client`,{ params:{idC :id }});
  }
  getUserNameByIdDemande(id: number) {
    return this.http.get(`http://localhost:8080/api/auth/demande/OneClient`,{ params:{idD :id }});
  }

}

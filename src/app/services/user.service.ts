import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
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
 

}

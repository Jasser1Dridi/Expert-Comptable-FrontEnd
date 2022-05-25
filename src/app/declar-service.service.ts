import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeclarServiceService {

  private baseUrl = 'http://localhost:8080/api/auth';
  constructor(private http: HttpClient) { }


  uploadd(file: File,RecipientObject:number,name:string,Montant:string,type:string,idDemande:number): Observable<HttpEvent<any>> {
    let params = new HttpParams().set("recipient",RecipientObject ).set("type",type).set("demande",idDemande).set("name",name).set("Montant",Montant);
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/uploadd`, formData, {
      reportProgress: true,
      responseType: 'json',
      params
    });
    return this.http.request(req);
  }















  
 
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }





}

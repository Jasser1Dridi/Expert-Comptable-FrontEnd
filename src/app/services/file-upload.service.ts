import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private baseUrl = 'http://localhost:8080/api/auth';
  constructor(private http: HttpClient) { }
  
  upload(file: File,RecipientObject:number,type:string,idDemande:number): Observable<HttpEvent<any>> {
    let params = new HttpParams().set("recipient",RecipientObject ).set("type",type).set("demande",idDemande);
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
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

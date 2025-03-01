import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  paginator: any;
 
  constructor(private httpClient: HttpClient) { }
  url = 'http://127.0.0.1:4000/api/';
  loginHeader = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  getUsers():Observable<any> {
    return this.httpClient.get<any>(this.url + 'users');
  }

  importUser(data: any):Observable<any> {
    return this.httpClient.post<any>(this.url + 'import-user',data);
  }

  exportUser():Observable<any> {
    return this.httpClient.get<any>(this.url + 'export-user',{observe:'response',responseType: 'text' as 'json'});
  }
  userdelete(id:string) {

    return this.httpClient.delete(this.url+'deleteusers/'+ id);  
    }  
}
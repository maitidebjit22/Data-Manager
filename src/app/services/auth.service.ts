import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:4000/register/';


  constructor(private http: HttpClient) { }

  register(user: any){
    return this.http.post(this.baseUrl+'register',user); 
  }
  login(user:any)
  {
    return this.http.post(this.baseUrl+'login',user);
  }
  
  isLoggedIn(){
  
    let token = localStorage.getItem('token');
    if(token){
      return true;
    }else{
      return false;
  
    }
  
  }
  getAll()
  {
    return this.http.get(this.baseUrl+'all');
  }
  
  userdelete(id:string) {
  
    return this.http.delete(this.baseUrl+'supprimer/'+ id);  
  }  
  getUserCounts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user-counts`);
  }
  getUserForToday(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/today`);
  }

}

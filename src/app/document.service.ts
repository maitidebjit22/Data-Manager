import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor(private http: HttpClient) {}
  private url='http://localhost:4000/file/';
  upload(user:any)
  {
    return this.http.post(this.url+'upload',user);
  }
  getFileCounts(): Observable<any> {
    return this.http.get(`${this.url}/file-counts`);
  }
  getUploadCount(): Observable<any> {
    return this.http.get(`${this.url}/upload-count`);
  }
  getFilesForToday(): Observable<any> {
    return this.http.get(`${this.url}/files/today`);
  }
}

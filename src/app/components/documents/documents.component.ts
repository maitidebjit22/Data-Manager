import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DocumentService } from 'src/app/document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  files: any;
  p:any;
  constructor(private http: HttpClient, private router:Router, private _auth:DocumentService) {

  }

 filedata: any;
  select(e: any) {
    this.filedata = e.target.files[0];
  }
 
  // Upload file to server
  onUpload() {
    let fd = new FormData()
    fd.append('file', this.filedata)
    this._auth.upload(fd).subscribe(
      res => {
        this.router.navigate(['/document']);
        alert("Upload Successfully")
      }
    );

  }

  ngOnInit(): void {
    this.getFiles();
  }
  getFiles(): void {
    this.http.get<any[]>('http://localhost:4000/file//files').subscribe(
      (response) => {
        this.files = response;
      },
      (error) => {
        console.error('Error fetching files', error);
      }
    );
  }

  downloadFile(filename: string): void {
    const filePath = `http://localhost:4000/file/download/${filename}`;
    window.location.href = filePath;
  }
  onLogout() {
    localStorage.removeItem('isAdmin'); // Log out by removing the admin flag
    this.router.navigate(['/admin']); // Navigate to the login page
  }
}


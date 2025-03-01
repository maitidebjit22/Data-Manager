import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/document.service';

@Component({
  selector: 'app-viewfile',
  templateUrl: './viewfile.component.html',
  styleUrls: ['./viewfile.component.css']
})
export class ViewfileComponent {

  files: any[] = [];
  p:any;
  constructor(private http: HttpClient, private router:Router,private fileService: DocumentService) {}
  filedata: any;
  select(e: any) {
    this.filedata = e.target.files[0];
  }
 
  // Upload file to server
  onUpload() {
    let fd = new FormData()
    fd.append('file', this.filedata)
    this.fileService.upload(fd).subscribe(
      res => {
        this.router.navigate(['/document']);
        alert("Upload Successfully")
      }
    );

  }
  ngOnInit(): void {
    this.fileService.getFilesForToday().subscribe(
      (files) => {
        this.files = files;
      },
      (error) => {
        console.error('Error fetching files:', error);
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

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/document.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  files: any[] = [];
  totalFiles: number = 0;
  totalUsers: number = 0;
  uploadCount: number = 0;
  constructor( private _auth: AuthService, private router:Router,private fileService:DocumentService) { }

  ngOnInit(): void {
  
  {
    this.loadFileCounts();
  }
  {
    this.loadUserCounts();
  }
  {
    this.getUploadCount();
  }
  {
    this.fileService.getFilesForToday().subscribe(
      (files) => {
        this.files = files;
      },
      (error) => {
        console.error('Error fetching files:', error);
      }
    );
  }

}
  loadFileCounts(): void {
    this.fileService.getFileCounts().subscribe(data => {
      this.totalFiles = data.totalFiles;
    });
  }
  loadUserCounts(): void {
    this._auth.getUserCounts().subscribe(data => {
      this.totalUsers = data.totalUsers;
   
    });
  }
  // Get the count of files uploaded today
  getUploadCount(): void {
    this.fileService.getUploadCount().subscribe((data) => {
      this.uploadCount = data.count;
    });
  }
  onLogout() {
    localStorage.removeItem('isAdmin'); // Log out by removing the admin flag
    this.router.navigate(['/admin']); // Navigate to the login page
  }

}


 
  


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/document.service';
import { AuthService } from 'src/app/services/auth.service';
import { Chart, registerables } from 'chart.js'
import { HttpClient } from '@angular/common/http';
Chart.register(...registerables);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data:any;
  files: any[] = [];
  dataname: any[] = [];
  datasize: any[] = [];
  totalFiles: number = 0;
  totalUsers: number = 0;
  uploadCount: number = 0;
  constructor( private _auth: AuthService, private router:Router,private fileService:DocumentService,private http: HttpClient) { }

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
    this.http.get<any[]>('http://localhost:4000/file//files').subscribe(res=>{
      this.data=res;
      if(this.data!=null)
      {
        for(let i=0;i<this.data.length;i++)
        {
          this.dataname.push(this.data[i].originalfile);
          this.datasize.push(this.data[i].fileSize);
          
        }
  
      }
      this.showchatdata(this.dataname,this.datasize);
    })
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
showchatdata(dataname:any, datasize:any){
  const myChart=new Chart("myChart", {
    type: 'bar',
    data: {
      labels: dataname,
      datasets: [{
        label: '# of Size',
        data: datasize,
        borderWidth: 1
      }]
    },
    options: {
      
        indexAxis: 'y',
        
      
    }
  });
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


 
  


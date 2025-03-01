import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent {

user: any;
  totalFiles: number = 0;
 p:any;
  constructor( private _auth: AuthService, private router:Router,) { }

  ngOnInit(): void {
   
    this._auth.getAll().subscribe(
      res => {
        this.user = res;
        console.log(this.user)
      }
    );
  }

  deleteuser(employee:any){
    this._auth.userdelete(employee._id).subscribe(data=>{
      this.user = this.user.filter((u: any) => u !== employee);
      alert("Delete Successfully")
    })
  }
  onLogout() {
    localStorage.removeItem('isAdmin'); // Log out by removing the admin flag
    this.router.navigate(['/admin']); // Navigate to the login page
  }

}


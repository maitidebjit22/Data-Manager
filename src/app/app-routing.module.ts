import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuhGuard} from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './guards/admin.guard';
import { ViewuserComponent } from './components/viewuser/viewuser.component';
import { ViewfileComponent } from './components/viewfile/viewfile.component';
import { ViewdataComponent } from './components/viewdata/viewdata.component';

const routes: Routes = [
  {
    path: 'home',canActivate: [AdminGuard],
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'register',canActivate: [AdminGuard],
    component: RegisterComponent
  },
  {
    path: 'dashboard',canActivate:[ AuhGuard ],
    component: DashboardComponent
  },
  {
    path: 'documents',canActivate: [AdminGuard],
    component:DocumentsComponent
  },
  {
    path: 'viewuser',canActivate: [AdminGuard],
    component:ViewuserComponent
  },
  {
    path: 'viewfile',canActivate: [AdminGuard],
    component:ViewfileComponent
  },
  {
    path: 'viewdata',canActivate: [AdminGuard],
    component:ViewdataComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ImportUserComponent } from './import-user/import-user.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { DocumentsComponent } from './components/documents/documents.component';
import { AdminComponent } from './components/admin/admin.component';
import { ViewuserComponent } from './components/viewuser/viewuser.component';
import { ViewfileComponent } from './components/viewfile/viewfile.component';
import { ViewdataComponent } from './components/viewdata/viewdata.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ImportUserComponent,
    DocumentsComponent,
    AdminComponent,
    ViewuserComponent,
    ViewfileComponent,
    ViewdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    NgxPaginationModule,
    FormsModule,
    FilterPipeModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

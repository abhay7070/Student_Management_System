import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './Login/login/login.component';
import { StudentComponent } from './Student/student/student.component';
import { ToastrModule } from 'ngx-toastr';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; 
import { AlertService } from './alert.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule, 
    MatPaginatorModule,
  
    MatSlideToggleModule,
    MatButtonModule,
     MatTooltipModule,
     MatIconModule,
     ToastrModule.forRoot(),
     AngularToastifyModule,
     
    
    
  ],
  providers: [ToastService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }

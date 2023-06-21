import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { catchError, of } from 'rxjs';
import { AlertService } from 'src/app/alert.service';
// import { Alert, AlertType, AlertOptions } from './alert.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [AlertService]
})
export class LoginComponent {
  
  loadedPosts: any[] = [];
  name:string;
  password:string;
  loginError:string;
  match:boolean;
  invalidlogin:boolean;
  invalidLogin?: boolean;


  constructor(private router: Router,private http: HttpClient,private alert:AlertService,private toastr:ToastService) { }
  
 
  login() {
    const credentials = {
      name: this.name,
      password: this.password
    };
    if(credentials.name===' ' && credentials.password===' '){
      this.alert.alertMessage('red', 'Please fill in all fields');
    }else{
//const credentials = JSON.stringify(credentials1);
this.http.post('https://localhost:7098/api/Login/logindetails', credentials, {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
    
  })
  
}).subscribe(response => {
  //console.log(response)
  const token = (<any>response).token;
  localStorage.setItem("jwt", token);
  this.invalidLogin = false;

  this.router.navigate(["student"]);
  this.alert.alertMessage('green', 'Logged in successfully');   
 }, err => {
  this.invalidLogin = true;
 // this.alert.invalidLogin();
 this.alert.alertMessage('red','Invalid Details')
});
    }
 
      
  }
  }


    // this.http.post('https://localhost:7098/api/Login', credentials)
    //   .pipe(
    //     catchError((error) => {
    //       // Handle error case here
    //       return of(error);
    //     })
    //   )
    //   .subscribe((response: any) => {
    //     console.log(response)
    //     const token = response.token;
    //     localStorage.setItem('jwt', token);
    //     this.router.navigate(['student']);
        
    //   });
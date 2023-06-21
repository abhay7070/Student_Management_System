import { Injectable } from '@angular/core';

import { ToastService } from 'angular-toastify';


//import { toast } from 'react-toastify';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor( private toastr:ToastService ) { }

   alertMessage(color:string,message:string){
    if(color==='green'){
      this.toastr.success(message)
    }else{
      this.toastr.error(message)
    }
   }

  SuccessLogin(){
   this.toastr.success("Login Successfully");
    
  }
  invalidLogin(){
    this.toastr.success("Invalid ")
  }

}

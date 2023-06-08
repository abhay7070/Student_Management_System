  import { Component, OnInit, ViewChild } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    
  })
  export class AppComponent implements OnInit {
    @ViewChild('f') update:NgForm
    loadedPosts: any[] = [];
    color1: any[] = [];
   
    postData = {
     // studentId:null,
      rollNo: null,
      name: " ",
      mark: null,
      course: " ",
      city: " ",
      color: " "
    };

    postData2 = {
      studentId:null,
      rollNo: null,
      name: " ",
      mark: null,
      course: " ",
      city: " ",
      color:" ",
    };
    studentId:number;
      rollNo: number;
      name: string;
      mark: number;
      course: string;
      city: string;
      color:string;

   
    editMode:boolean=false;
    editUserId;
    clear() {
      this.postData.name = "";
      this.postData.rollNo = null;
      this.postData.mark = null;
      this.postData.course = "";
      this.postData.city = "";
      this.postData.color=" ";


    }

    clearPost() {
      this.postData2.studentId=null;
      this.postData2.name = "";
      this.postData2.rollNo = null;
      this.postData2.mark = null;
      this.postData2.course = "";
      this.postData2.city = "";
      this.postData2.color=" ";


    }
    constructor(private http: HttpClient) { }
     
    ngOnInit() {
      this.fetchPosts();
      console.log("hiii")
    }

    clearForm() {
      this.update.resetForm();
     
    }

    showColorCode(element: any) {
      const colorCode = element.getAttribute('data-color');
      console.log(colorCode); 
    }

    onCreatePost( name: string, rollNo: number, mark: number, course: string, city: string,color:string ) {
      // Send HTTP request
       const Demo = {
        // studentId:null,
         rollNo: rollNo,
         name: name,
         mark: mark,
         course: course,
         city: city,
         color:color
       };
      
        this.http.post('https://localhost:7098/api/Student/addstudent', Demo)
          .subscribe(responseData => {
            console.log(responseData);
            this.onFetchPosts();
            this.clear();
          });       
       
    }

    onFetchPosts() {
      this.fetchPosts();
    }

    onClearPosts() {
      this.loadedPosts = [];
    } 

    private fetchPosts() {
      this.http.get('https://localhost:7098/api/Student/getstudentlist')
        // here data stored in observable to get data use scribe
        .subscribe((res: any) => {
          this.loadedPosts = res;
          console.log(this.loadedPosts);
        });
    }
    onDelete(id: string) {
      this.http.delete(`https://localhost:7098/api/Student/deletestudent?Id=${id}`).subscribe((res: any) => {
        console.log(res);
        this.onFetchPosts();
      })
    }
temp(){}
Cancle(){
  this.editMode=false;
  this.clearForm();
}

    onUpdatePost() {
      this.postData2 = {
        studentId: this.postData2.studentId,
        rollNo: this.update.value.rollNo,
        name: this.update.value.name,
        mark: this.update.value.mark,
        course: this.update.value.course,
        city: this.update.value.city,
        color:this.update.value.color
      };
        console.log(this.postData2.studentId);
        console.log(this.postData2.name);

        this.http.put(`https://localhost:7098/api/Student/updatestudent`, this.postData2)
        .subscribe(response => {
          console.log(response);
          this.onFetchPosts(); // Fetch the updated list of students after successful update
          //this.clear();
         // this.clearPost();
         this.editMode=false;
          this.clearForm();
        });

    }

     tp(){

     }
   onUpdate(studentId,index ){
    this.editMode=true;

  this.editUserId=studentId;
  console.log(studentId);
 // console.log(name)

  console.log(this.loadedPosts[index].name);
   // this.editMode=true;
  this.update.setValue({
   // studentId:this.loadedPosts[index].studentId,
    rollNo:this.loadedPosts[index].rollNo,
    name:this.loadedPosts[index].name,
    mark:this.loadedPosts[index].mark,
    course:this.loadedPosts[index].course,
    city:this.loadedPosts[index].city,
    color:this.loadedPosts[index].color
    
  })
  this.postData2.studentId=this.loadedPosts[index].studentId;
  this.postData2.rollNo=this.loadedPosts[index].rollNo;
  this.postData2.name=this.loadedPosts[index].name;
  this.postData2.mark=this.loadedPosts[index].mark;
  this.postData2.course=this.loadedPosts[index].course;
  this.postData2.city=this.loadedPosts[index].city;
  this.postData2.color=this.loadedPosts[index].color;
  console.log(this.postData2)
   
 
}
  }
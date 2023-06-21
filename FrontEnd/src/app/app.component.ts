import { CSP_NONCE, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [AlertService] 
})
export class AppComponent  {
//   @ViewChild('f') update:NgForm
//   loadedPosts: any[] = [];
//   loadedPosts2: any[] = [];
//   loadedPosts3: any[] = [];
//   loadedState: any[] = [];
//   listCountriesState: any[] = [];
//   color1: any[] = [];
//   filteredStates: any[] = [];
// selectedCountryId: number;
// countries: any[] = [];
// states: any[] = [];

 
//   postData = {
//    // studentId:null,
//     rollNo: null,
//     name: " ",
//     mark: null,
//     course: " ",
//     city: " ",
//     color: " ",
//     country:" ",
//     state:" "
//   };

//   postData2 = {
//     studentId:null,
//     rollNo: null,
//     name: " ",
//     mark: null,
//     course: " ",
//     city: " ",
//     color:" ",
//     country:" ",
//     state:" ",
//   //  selectedStateId:null
//   };
//   studentId:number;
//     rollNo: number;
//     name: string;
//     mark: number;
//     course: string;
//     city: string;
//     color:string;
//     state: number;
//     countryIndex:number;
//     country:number;
//     selectedStateId:number;

 
//   editMode:boolean=false;
//   editUserId;
//   clear() {
//     this.postData.name = "";
//     this.postData.rollNo = null;
//     this.postData.mark = null;
//     this.postData.course = "";
//     this.postData.city = "";
//     this.postData.color=" ";


//   }

//   clearPost() {
//     this.postData2.studentId=null;
//     this.postData2.name = "";
//     this.postData2.rollNo = null;
//     this.postData2.mark = null;
//     this.postData2.course = "";
//     this.postData2.city = "";
//     this.postData2.color=" ";
//     this.postData2.country = "";
//     this.postData2.state=" "; 


//   }
//   constructor(private http: HttpClient) { }
   
//   ngOnInit() {
//     this.getstudentCountriesModel();
//     this.fetchPosts();
//    // console.log("hiii")
//     //this.ongetCountries();
//     //this.getstateList();
//     this.getstudentCountriesModel();    
    
//   }

//   clearForm() {
//     this.update.resetForm();
   
//   }

//   showColorCode(element: any) {
//     const colorCode = element.getAttribute('data-color');
//     console.log(colorCode); 
//   }

//   onCreatePost( name: string, rollNo: number, mark: number, course: string, city: string,color:string,countryIndex:number,selectedStateId:number ) {
//     // Send HTTP request
   
   
//      const Demo = {
//       // studentId:null,
//        rollNo: rollNo,
//        name: name,
//        mark: mark,
//        course: course,
//        city: city,
//        color:color,
//        country:countryIndex,
//        state:selectedStateId
//      };
//      console.log(Demo)
    
//       this.http.post('https://localhost:7098/api/Student/addstudent', Demo)
//         .subscribe(responseData => {
//           console.log(responseData);
//           this.onFetchPosts();
//           this.clear();
//         });       
     
//   }

//   onFetchPosts() {
//     this.fetchPosts();
//   }

//   onClearPosts() {
//     this.loadedPosts = [];
//   } 

//   private fetchPosts() {
//     this.http.get('https://localhost:7098/api/Student/getstudentlist').subscribe((res: any) => {
//       this.loadedPosts = res.map((post: any) => ({
//         ...post,
//         countryName: this.countries.find((country) => country.countryId === post.country)?.countryName,
//           //optional chaining operator if not matching found return undefine
//         stateName: this.states.find((state) => state.stateId === post.state)?.stateName
      
//       }));
      
//       console.log(this.loadedPosts);
  
      
//     });
//     this.clearForm();
//   }



//   onDelete(id: string) {
//     this.http.delete(`https://localhost:7098/api/Student/deletestudent?Id=${id}`).subscribe((res: any) => {
//       console.log(res);
//       this.onFetchPosts();
//     })
//   }
// temp(){}
// Cancle(){
// this.editMode=false;
// this.clearForm();
// }

// ongetCountries(){
//   this.http.get('https://localhost:7098/api/Student/getstudentCountries')
//   .subscribe((res: any) => {
//     this.loadedPosts2 = res;
//     console.log(this.loadedPosts2);
//   });
//  }
// getstateList(){
//   this.http.get('https://localhost:7098/api/Student/getstudentStates')
//   // here data stored in observable to get data use scribe
//   .subscribe((res: any) => {
//     this.loadedState = res;
//     console.log(this.loadedPosts3);
//   });
// }

//  getstateonId(id: number) {
//   this.http.get(`https://localhost:7098/api/Student/getstatebyid?id=${id}`).subscribe((res: any) => {
//     this.loadedPosts3 = res;
//   console.log(res);
    
//   })
// }

// getstudentCountriesModel(){
//   this.http.get('https://localhost:7098/api/Student/getstudentCountries')
//   // here data stored in observable to get data use scribe
//   .subscribe((res: any) => {
//     this.countries = res.countries;
//     this.states = res.states;
//     console.log(this.countries);
//     console.log(this.states);
//     // this.listCountriesState = res;
//     // console.log(this.listCountriesState);
//   });
// }



// onCountryChange(countryId: number) {
//   this.selectedCountryId = countryId +1;

//  this.filteredStates = this.states.filter(item => item.countryId === this.selectedCountryId);
//  console.log(this.filteredStates)
// }
// // onSelect(countryid) {
// //   this.filteredStates = this.loadedPosts3.filter((item) => item.countryid == countryid);
// // }

// // filterStates() {
// //   this.filteredStates = this.loadedPosts2.filter(country => country.id === this.selectedCountryId)[0]?.states;
// // }

// onChangefromUpdate(countryId: number){
//   this.filteredStates = this.states.filter(item => item.countryId === countryId);
//   console.log(this.filteredStates)
// }
//   onUpdatePost() {
//     this.postData2 = {
//       studentId: this.postData2.studentId,
//       rollNo: this.update.value.rollNo,
//       name: this.update.value.name,
//       mark: this.update.value.mark,
//       course: this.update.value.course,
//       city: this.update.value.city,
//       color:this.update.value.color,
//       country:this.update.value.country,
//       state:this.update.value.state,
//       // selectedStateId:this.update.value.state
//     };
//       console.log(this.postData2.studentId);
//       console.log(this.postData2.name);

//       this.http.put(`https://localhost:7098/api/Student/updatestudent`, this.postData2)
//       .subscribe(response => {
//         console.log(response);
//         this.onFetchPosts(); // Fetch the updated list of students after successful update
//         //this.clear();
//        // this.clearPost();
//        this.editMode=false;
//         this.clearForm();
//       });

//   }

//    tp(){

//    }
//  onUpdate(studentId,index ){
// this.onChangefromUpdate(this.loadedPosts[index].country);
// console.log(this.loadedPosts[index].country)

// this.editMode = true;
// this.editUserId = studentId;

// this.update.setValue({
//   rollNo: this.loadedPosts[index].rollNo,
//   name: this.loadedPosts[index].name,
//   mark: this.loadedPosts[index].mark,
//   course: this.loadedPosts[index].course,
//   city: this.loadedPosts[index].city,
//   color: this.loadedPosts[index].color,
//   state: this.loadedPosts[index].state,
//   country: this.loadedPosts[index].country
// });
// //this.update.controls['state'].setValue(this.loadedPosts[index].state);

// // Set the value of state field separately
// //this.update.controls['selectedStateId'].setValue(this.loadedPosts[index].stateName);

// this.postData2.studentId=this.loadedPosts[index].studentId;
// this.postData2.rollNo=this.loadedPosts[index].rollNo;
// this.postData2.name=this.loadedPosts[index].name;
// this.postData2.mark=this.loadedPosts[index].mark;
// this.postData2.course=this.loadedPosts[index].course;
// this.postData2.city=this.loadedPosts[index].city;
// this.postData2.color=this.loadedPosts[index].color;
// this.postData2.state=this.loadedPosts[index].state,
// this.postData2.country=this.loadedPosts[index].country,

// console.log(this.postData2)
 

// }
}
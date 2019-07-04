import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
    selector: 'hr-login',
    templateUrl: './hr-login.component.html',
    styleUrls: ['./hr-login.component.css'],
})
export class HRLoginComponent {
    constructor(private http:HttpClient,private router:Router){ }
    name = "MKR";
    formSubmit(hrdetails){
       console.log(hrdetails);
       this.http.post("http://localhost:8081/RegnantPortal-Angular/HRLogin",hrdetails).subscribe((data:any)=>{
            console.log(data);
            if(data.name=="unsuccess"){
                this.router.navigate([{outlets: { nav : ['hrnavbar']}}]).then((navdata)=>{
                    this.router.navigate(['/hr-home']);});
                
            }
       })
    }
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    address:new FormArray([])
  })

  ngOnInit(): void {
  }
 get  addressList(){
  return (<FormArray>this.loginForm.get('address')).controls
  }
  removeFeild(data:any){
this.addressList.forEach((value,index)=>{
  if(value==data){
    this.addressList.splice(index,1)
  }
})
  }
  addFeild(){
    // alert("hai")
    const feild = new FormControl();
(<FormArray>this.loginForm.get('address')).push(feild)
  }

  onClick(data:any){
    console.log(data.value)
  }
}

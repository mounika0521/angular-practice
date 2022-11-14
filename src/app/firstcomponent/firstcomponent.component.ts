import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {

  constructor() { }
  user:any="This Data is coming from Parent component"
returnData:any;

  ngOnInit(): void {
  }
  sendMessage(allData: any){
    console.log(allData)
this.employeeData.push(allData)
  }

  employeeData = [
    {name:"Jhon",age:22},
    {name:"andrew",age:23},
    {name:"Christin",age:27},
    {name:"george",age:30},
    {name:"simson",age:35}
  ]

 eData = this.employeeData.filter((d:any) => {
return d.age >= 27;
console.log(this.eData)

})
newResult = this.eData;


}

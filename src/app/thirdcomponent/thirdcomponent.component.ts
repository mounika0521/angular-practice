import { Component, OnInit } from '@angular/core';
import { SibblingService } from '../service/sibbling.service';

@Component({
  selector: 'app-thirdcomponent',
  templateUrl: './thirdcomponent.component.html',
  styleUrls: ['./thirdcomponent.component.css']
})
export class ThirdcomponentComponent implements OnInit {
result:any;
  constructor(private myData:SibblingService) { }

  ngOnInit(): void {
this.myData.myService.subscribe(d=>{
this.result = d;
})
  }

}

import { Component, OnInit } from '@angular/core';
import { SibblingService } from '../service/sibbling.service';

@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})
export class SecondcomponentComponent implements OnInit {

  constructor(private jdata:SibblingService) { }

  ngOnInit(): void {
  }
  sendData(data: any){
    this.jdata.sendMessage(data.value)
  }
}

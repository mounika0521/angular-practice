import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-child-component',
  templateUrl: './first-child-component.component.html',
  styleUrls: ['./first-child-component.component.css']
})
export class FirstChildComponentComponent implements OnInit {

  constructor() { }
  @Input() uname:any;
  @Output() sendData = new EventEmitter()
  ngOnInit(): void {
  }
onclick(data:any){
this.sendData.emit(data)
}
}

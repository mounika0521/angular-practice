import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SibblingService {
public myService = new Subject();
  constructor() { }

sendMessage(data: any){
  this.myService.next(data);
}

}

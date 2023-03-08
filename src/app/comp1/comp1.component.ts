import { Component, OnInit } from '@angular/core';
import { BehavServiceService } from '../behav-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  data="alma"
  constructor(private behav: BehavServiceService) { }


  ngOnInit(): void {
  }

  sendDataToService(){

    this.behav.setData(this.data);
  }

}

import { Component, OnInit } from '@angular/core';
import { BehavServiceService } from '../behav-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
  data:any;
  constructor(private behav: BehavServiceService) { }

  ngOnInit(): void {
    this.behav.currentData.subscribe({
      next: data =>{
        this.data = data;  
      }
    })
  }


}

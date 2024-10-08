import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})

export class CounterComponent {
  public nameCounter: string ='holala';
  public counter: number = 10;

  increaseBy(cifra:number){
    this.counter  += cifra;
  }
  resetCounter(){
    this.counter = 10;
  }
  constructor(



  ) { }

}

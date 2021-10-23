import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplication',
  templateUrl: './aplication.component.html',
  styleUrls: ['./aplication.component.scss']
})
export class AplicationComponent implements OnInit {

  currentComponent!: string;
  constructor() {

  }

  ngOnInit(): void {
    this.currentComponent = "media";
  }

  onNotify(value: any) {
    this.currentComponent = value;
    console.log(this.currentComponent);
  }

}

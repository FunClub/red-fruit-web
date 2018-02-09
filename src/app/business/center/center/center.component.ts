import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  showMyProfileOperation:boolean;
  constructor() { }

  ngOnInit() {
  }
  toggleMyProfileOperation(){
    this.showMyProfileOperation = !this.showMyProfileOperation;
  }
}

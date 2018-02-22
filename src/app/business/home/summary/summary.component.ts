import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../../core/service/home.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private homeService:HomeService) { }

  ngOnInit() {
  }

}

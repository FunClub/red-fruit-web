import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../core/service/shared.service';
import {Article} from '../../../core/data/vo/articles.data';

@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.css']
})
export class MoodsComponent implements OnInit {
  articles:Article[];
  constructor( private sharedService:SharedService) { }

  ngOnInit() {
    /*this.sharedService.getArticles("5","1","10").subscribe(res=>{
      this.articles = res.data;
    });*/
  }

}

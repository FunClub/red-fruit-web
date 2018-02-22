import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../core/data/dto/articles.data';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article:Article;
  constructor() { }

  ngOnInit() {
    console.log(this.article)
  }

}

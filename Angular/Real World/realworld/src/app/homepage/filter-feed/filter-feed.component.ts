import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Article} from '../../shared/article.model';
import {ApiService} from '../../shared/api.service';
import {ArticleService} from '../../shared/article.service';

@Component({
  selector: 'app-filter-feed',
  templateUrl: './filter-feed.component.html',
  styles: []
})
export class FilterFeedComponent implements OnInit {
  @Input() filter: string ;
  @Input() listOfArticle: Article[] = [];

  constructor(
    private apiService: ApiService,
    private articleService: ArticleService) {
  }

  ngOnInit() {
  }

}

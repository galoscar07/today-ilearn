import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../shared/api.service';
import {Article} from '../../shared/article.model';
import {ArticleService} from '../../shared/article.service';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.css']
})
export class GlobalFeedComponent implements OnInit {
  listOfArticles: Article[] = [];

  constructor(
    private apiService: ApiService,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.apiService.getAllArticlesWithoutAuth().subscribe(
      (response: any) => {
        for (let article of response.articles) {
          let art = new Article(article);
          this.listOfArticles.push(art);
        }
      });
    this.articleService.setListOfArticles(this.listOfArticles);
  }

}

import { Component, OnInit } from '@angular/core';
import {Article} from '../shared/article.model';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  isFilterTabOpen = false;
  filterTabName = '';
  isFilterTabActiveClass = '';
  isGlobalTabActive = true;
  isGlobalTabActiveClass = 'active';
  filterName = '';
  listOfArticledFiltere: Article[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  getFilteredList(filter) {
    let listOfArticles: Article[] = [];
    this.apiService.getFilteredArticled(filter).subscribe(
      (response: any) => {
        for (let article of response.articles) {
          let art = new Article(article);
          listOfArticles.push(art);
        }
      });
    return listOfArticles;
  }

  filterArticlesByTag(tagName: string) {
    this.filterName = tagName;
    this.isFilterTabOpen = true;
    this.filterTabName = '# ' + this.filterName;
    this.isFilterTabActiveClass = 'active';
    this.isGlobalTabActiveClass = '';
    this.isGlobalTabActive = false;
    this.listOfArticledFiltere = this.getFilteredList(this.filterName);
  }

  globalFeedClicked() {
    this.isFilterTabOpen = false;
    this.isGlobalTabActiveClass = 'active';
    this.isGlobalTabActive = true;
  }
}

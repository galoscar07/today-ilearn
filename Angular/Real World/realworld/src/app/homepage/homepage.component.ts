import { Component, OnInit } from '@angular/core';
import {Article} from '../shared/article.model';
import {ApiService} from '../shared/api.service';
import {AuthService} from '../auth/auth.service';
import {User} from '../shared/user.model';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  isFilterTabOpen = false;
  filterTabName = '';
  isFilterTabActiveClass = '';
  filterName = '';

  isGlobalTabActive = true;
  isGlobalTabActiveClass = 'active';

  isYourTabActive = false;
  isYourTabActiveClass = '';

  listOfArticledFiltere: Article[] = [];
  listOfArticles: Article[] = [];
  listOfArticlesYourFeed: Article[] = [];
  articleListLength = 0;
  totalPages = [];
  noArticles = false;

  constructor(private apiService: ApiService,
              private authService: AuthService,
              private userData: User) { }

  ngOnInit() {
    if (this.authService.isUserAuthenticated()) {
      this.listOfArticles = this.getYourFeed();
      this.yourFeedClicked();
    } else {
      this.listOfArticles = this.getGlobalFeed();
    }
  }

  getGlobalFeed() {
    const listOfArt: Article[] = [];
    this.noArticles = false;
    this.apiService.getAllArticlesWithoutAuthAndWithOffset('0').subscribe(
      (response: any) => {
        for (const article of response.articles) {
          const art = new Article(article);
          listOfArt.push(art);
        }
        const listLength = response.articlesCount;
        const noPages = Math.ceil(listLength / 10);
        this.articleListLength = listLength;
        this.totalPages = Array.from(Array(noPages).keys());
        this.totalPages = this.totalPages.map(elem => elem + 1);
        if (this.articleListLength === 0) {
          this.noArticles = true;
        }
      });
    return listOfArt;
  }

  getFilteredList(filter) {
    const listOfArticles: Article[] = [];
    this.noArticles = false;
    this.apiService.getFilteredArticlesWithOffset(filter, '0').subscribe(
      (response: any) => {
        for (const article of response.articles) {
          const art = new Article(article);
          listOfArticles.push(art);
        }
        const listLength = response.articlesCount;
        const noPages = Math.ceil(listLength / 10);
        this.articleListLength = listLength;
        this.totalPages = Array.from(Array(noPages).keys());
        this.totalPages = this.totalPages.map(elem => elem + 1);
        if (this.articleListLength === 0) {
          this.noArticles = true;
        }
      });
    return listOfArticles;
  }

  getYourFeed() {
    const listOfArt: Article[] = [];
    this.noArticles = false;
    this.apiService.getYourFeedWithOffset('0').subscribe(
      (response: any) => {
        for (const article of response.articles) {
          const art = new Article(article);
          listOfArt.push(art);
        }
        const listLength = response.articlesCount;
        let noPages = (listLength < 10) ? 1 : listLength / 10 ;
        noPages = Math.ceil(noPages);
        this.articleListLength = listLength;
        this.totalPages = Array.from(Array(noPages).keys());
        this.totalPages = this.totalPages.map(elem => elem + 1);
        if (this.articleListLength === 0) {
          this.noArticles = true;
        }
      },
      (error1 => {})
    );
    return listOfArt;
  }

  filterArticlesByTag(tagName: string) {
    this.filterName = tagName;
    this.isFilterTabOpen = true;
    this.filterTabName = '# ' + this.filterName;
    this.isFilterTabActiveClass = 'active';
    this.isGlobalTabActiveClass = '';
    this.isGlobalTabActive = false;
    this.isYourTabActive = false;
    this.isYourTabActiveClass = '';
    this.listOfArticledFiltere = this.getFilteredList(this.filterName);
  }

  globalFeedClicked() {
    this.isFilterTabOpen = false;
    this.isGlobalTabActiveClass = 'active';
    this.isGlobalTabActive = true;
    this.isYourTabActive = false;
    this.isYourTabActiveClass = '';
    this.listOfArticles = this.getGlobalFeed();
  }

  yourFeedClicked() {
    this.isFilterTabActiveClass = '';
    this.isGlobalTabActiveClass = '';
    this.isGlobalTabActive = false;
    this.isFilterTabOpen = false;
    this.isYourTabActive = true;
    this.isYourTabActiveClass = 'active';
    this.listOfArticlesYourFeed = this.getYourFeed();
  }
}

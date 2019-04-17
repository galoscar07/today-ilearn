import { Component, OnInit } from '@angular/core';
import {Article} from '../shared/article.model';
import {ApiService} from '../shared/api.service';
import {AuthService} from '../auth/auth.service';
import {User} from '../shared/user.model';

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

  constructor(private apiService: ApiService,
              private authService: AuthService,
              private userData: User) { }

  ngOnInit() {
    this.listOfArticles = this.getGlobalFeed();
  }

  getGlobalFeed() {
    const listOfArt: Article[] = [];
    this.apiService.getAllArticlesWithoutAuth().subscribe(
      (response: any) => {
        for (const article of response.articles) {
          const art = new Article(article);
          listOfArt.push(art);
        }
        const listLength = response.articles.length;
        const noPages = listLength / 10;
        this.articleListLength = listLength;
        this.totalPages = Array.from(Array(noPages).keys());
        this.totalPages = this.totalPages.map(elem => elem + 1);
      });
    return listOfArt;
  }

  getFilteredList(filter) {
    const listOfArticles: Article[] = [];
    this.apiService.getFilteredArticled(filter).subscribe(
      (response: any) => {
        for (const article of response.articles) {
          const art = new Article(article);
          listOfArticles.push(art);
        }
        const listLength = response.articles.length;
        const noPages = listLength / 10;
        this.articleListLength = listLength;
        this.totalPages = Array.from(Array(noPages).keys());
        this.totalPages = this.totalPages.map(elem => elem + 1);
      });
    return listOfArticles;
  }

  getYourFeed() {
    const author = this.userData.username;
    const listOfArt: Article[] = [];
    this.apiService.getArticlesByAuthor(author).subscribe(
      (response: any) => {
        for (const article of response.articles) {
          const art = new Article(article);
          listOfArt.push(art);
        }
        const listLength = response.articles.length;
        const noPages = (listLength < 10) ? 1 : listLength / 10 ;
        this.articleListLength = listLength;
        this.totalPages = Array.from(Array(noPages).keys());
        this.totalPages = this.totalPages.map(elem => elem + 1);
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

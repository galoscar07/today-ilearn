import {Injectable} from '@angular/core';
import {Article} from './article.model';

@Injectable()
export class ArticleService {
  private listOfArticles: Article[];
  public articleToBeShown: Article;

  constructor() {
    this.listOfArticles = [];
  }

  saveArticleToBePrintedOnTheArticlePage(article) {
    this.articleToBeShown = new Article(article);
  }

  getArticleForArticlePage() {
    return this.articleToBeShown;
  }

  getListOfArticles() {
    return this.listOfArticles;
  }

  setListOfArticles(receivedList: Article[]) {
    this.listOfArticles = receivedList;
  }
}



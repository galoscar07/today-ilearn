import {Injectable} from '@angular/core';
import {Article} from './article.model';

@Injectable()
export class ArticleService {
  private listOfArticles: Article[];

  constructor() {
    this.listOfArticles = [];
  }

  getListOfArticles() {
    return this.listOfArticles;
  }

  setListOfArticles(receivedList: Article[]) {
    this.listOfArticles = receivedList;
  }
}



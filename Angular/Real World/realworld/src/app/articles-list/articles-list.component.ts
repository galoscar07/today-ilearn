import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../shared/article.model';

import {ApiService} from '../shared/api.service';
import {ArticleService} from '../shared/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  @Input() articleList: Article[] = null;
  @Input() filter: string = null;
  @Input() articleListLength: number;
  @Input() totalPages: [];

  currentPage = 1;

  constructor(private apiService: ApiService,
              private articleService: ArticleService) {}

  ngOnInit() {
    console.log(this.articleList[0].slug);
  }

  updateArticle(article: Article, index: number) {
    this.articleList[index].favorited = article.favorited;
    this.articleList[index].favoritesCount = article.favoritesCount;
  }

  likeOrDislikePost(article: Article, articleButton: any, index: number) {
    if (article.favorited) {
      this.apiService.delUnfavoriteArticle(article.slug).subscribe(
        (response: any) => {
          this.updateArticle(response.article, index);
        },
        (error1 => {
          console.log(error1);
        })
      );
    } else {
      this.apiService.postFavoriteArticle(article.slug).subscribe(
        (response: any) => {
          this.updateArticle(response.article, index);
        },
        (error1 => {
          console.log(error1);
        })
      );
    }
  }

  filterArticleByPage() {
    return (this.articleList.length > 10)
      ? this.articleList.slice((this.currentPage - 1) * 10 + 1, this.currentPage * 10)
      : this.articleList;
  }

  setPageTo(pageNumber: any) {
    this.currentPage = pageNumber;
  }
}

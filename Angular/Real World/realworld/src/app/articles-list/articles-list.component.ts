import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../shared/article.model';

import {ApiService} from '../shared/api.service';
import {ArticleService} from '../shared/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  @Input() articleList: Article[] = [];
  @Input() filter: string = null;
  @Input() articleListLength: number;
  @Input() totalPages: [];

  currentPage = 1;

  constructor(private apiService: ApiService,
              private articleService: ArticleService,
              private router: Router) {}

  ngOnInit() {
  }

  updateArticle(article: Article, index: number) {
    this.articleList[index].favorited = article.favorited;
    this.articleList[index].favoritesCount = article.favoritesCount;
  }

  likeOrDislikePost(article: Article, articleButton: any, index: number) {
    if (article.favorited) {
      this.apiService.delUnfavoriteArticle(article.slug).subscribe(
        (response: any) => {
          this.updateArticle(response.article, index + 1);
        },
        (error1 => {
          this.router.navigate(['/login']);
        })
      );
    } else {
      this.apiService.postFavoriteArticle(article.slug).subscribe(
        (response: any) => {
          this.updateArticle(response.article, index + 1);
        },
        (error1 => {
          this.router.navigate(['/login']);
        })
      );
    }
  }

  filterArticleByPage() {
    return (this.articleList !== null && this.articleList.length > 10)
      ? this.articleList.slice((this.currentPage - 1) * 10 + 1, this.currentPage * 10)
      : this.articleList;
  }

  setPageTo(pageNumber: any) {
    this.currentPage = pageNumber;
  }

  articleClicked(article: Article) {
    this.articleService.saveArticleToBePrintedOnTheArticlePage(article);
  }
}

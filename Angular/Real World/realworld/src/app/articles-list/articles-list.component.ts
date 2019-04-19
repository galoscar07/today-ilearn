import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../shared/article.model';

import {ApiService} from '../shared/api.service';
import {ArticleService} from '../shared/article.service';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

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
  @Input() noArticles = false;
  @Input() type: string = null;

  currentPage = 1;

  constructor(private apiService: ApiService,
              private articleService: ArticleService,
              private router: Router,
              private authService: AuthService) {}

  ngOnInit() {
  }

  updateArticle(article: Article, index: number) {
    this.articleList[index].favorited = article.favorited;
    this.articleList[index].favoritesCount = article.favoritesCount;
  }

  likeOrDislikePost(article: Article, articleButton: any, index: number) {
    if (!this.authService.isUserAuthenticated()) {
      this.router.navigate(['/login']);
    }
    if (article.favorited) {
      this.apiService.delUnfavoriteArticle(article.slug).subscribe(
        (response: any) => {
          this.updateArticle(response.article, index);
        },
        (error1 => {
          this.router.navigate(['/login']);
        })
      );
    } else {
      this.apiService.postFavoriteArticle(article.slug).subscribe(
        (response: any) => {
          this.updateArticle(response.article, index);
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
    this.noArticles = false;
    this.articleList = [];
    this.currentPage = pageNumber;
    if (this.type === 'your_feed') {
      this.getYourFeed(pageNumber);
    }
    if (this.type === 'global_feed') {
      this.getGlobalFeed(pageNumber);
    }
    if ( this.type === 'filtered_feed' ) {
      this.getFilteredList(this.filter, pageNumber);
    }
    if (this.type === 'author_feed') {
      this.getAuthorFeed(this.filter, pageNumber);
    }
    if (this.type === 'favorited_feed') {
      this.getFavouriteFeed(this.filter, pageNumber);
    }
  }

  getGlobalFeed(pageNumber: number) {
    const listOfArt: Article[] = [];
    this.noArticles = false;
    const offset = pageNumber * 10 - 10;
    this.apiService.getAllArticlesWithoutAuthAndWithOffset(offset.toString()).subscribe(
      (response: any) => {
        for (const article of response.articles) {
          const art = new Article(article);
          listOfArt.push(art);
        }
        this.articleList = listOfArt;
      });
  }

  getFilteredList(filter: string, pageNumber: number) {
    const listOfArticles: Article[] = [];
    this.noArticles = false;
    const offset = pageNumber * 10 - 10;
    this.apiService.getFilteredArticlesWithOffset(filter, offset.toString()).subscribe(
      (response: any) => {
        for (const article of response.articles) {
          const art = new Article(article);
          listOfArticles.push(art);
        }
        this.articleList = listOfArticles;
      });
  }

  getYourFeed(pageNumber: number) {
    const listOfArt: Article[] = [];
    this.noArticles = false;
    const offset = pageNumber * 10 - 10;
    this.apiService.getYourFeedWithOffset(offset.toString()).subscribe(
      (response: any) => {
        for (const article of response.articles) {
          const art = new Article(article);
          listOfArt.push(art);
        }
        this.articleList = listOfArt;
      },
      (error1 => {})
    );
  }

  private getAuthorFeed(filter: string, pageNumber: any) {
    const listOfArt: Article[] = [];
    this.noArticles = false;
    const offset = pageNumber * 10 - 10;
    this.apiService.getArticlesByAuthorWithOffset(filter, offset.toString()).subscribe(
      (response: any) => {
        for (const article of response.articles) {
          const art = new Article(article);
          listOfArt.push(art);
        }
        this.articleList = listOfArt;
      },
      (error1 => {})
    );
  }

  private getFavouriteFeed(filter: string, pageNumber: number) {
    const listOfArt: Article[] = [];
    this.noArticles = false;
    const offset = pageNumber * 10 - 10;
    this.apiService.getFavoritedByUsernameWithOffset(filter, offset.toString()).subscribe(
      (response: any) => {
        for (const article of response.articles) {
          const art = new Article(article);
          listOfArt.push(art);
        }
        this.articleList = listOfArt;
      },
      (error1 => {})
    );
  }

  articleClicked(article: Article) {
    this.articleService.saveArticleToBePrintedOnTheArticlePage(article);
  }
}

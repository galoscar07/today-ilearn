import { Component, OnInit } from '@angular/core';
import {Article} from '../../shared/article.model';
import {ApiService} from '../../shared/api.service';
import {User} from '../../shared/user.model';
import {ActivatedRoute} from '@angular/router';
import {UserProfileService} from '../../shared/userprofile.service';

@Component({
  selector: 'app-favourited-articles',
  templateUrl: './favourited-articles.component.html',
  styleUrls: ['./favourited-articles.component.css']
})
export class FavouritedArticlesComponent implements OnInit {

  articleList: Article[] = null;
  articleListLength = 0;
  totalPages = [];

  constructor(private apiService: ApiService,
              private user: User,
              private route: ActivatedRoute,
              private userProfileService: UserProfileService) { }

  getListFavouriteByUser() {
    const listArt: Article[] = [];
    this.apiService.getFavoritedByUsernameWithOffset(this.userProfileService.username, '0').subscribe(
      (response: any) => {
        for (const article of response.articles) {
          const art = new Article(article);
          listArt.push(art);
        }
        const listLength = response.articlesCount;
        const noPages = (listLength < 10) ? 1 : Math.ceil(listLength / 10) ;
        this.articleListLength = listLength;
        this.totalPages = Array.from(Array(noPages).keys());
        this.totalPages = this.totalPages.map(elem => elem + 1);
      },
      (error1 => {
      })
    );

    return listArt;
  }

  ngOnInit() {
    this.articleList = this.getListFavouriteByUser();
  }

}

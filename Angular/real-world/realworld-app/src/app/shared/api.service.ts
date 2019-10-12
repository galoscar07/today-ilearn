import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {Article} from './article.model';

@Injectable()
export class ApiService {
  apiLink = 'https://conduit.productionready.io/api/';

  constructor(private http: HttpClient,
              private authService: AuthService) {}

  getAllTags() {
    return this.http.get(this.apiLink + 'tags');
  }

  getAllArticlesWithoutAuth() {
    return this.http.get(this.apiLink + 'articles');
  }

  getAllArticlesWithoutAuthAndWithOffset(offset: string) {
    // Limit is predefined with the value 10
    return this.http.get(this.apiLink + 'articles/?limit=10&offset=' + offset);
  }

  getFilteredArticled(filter: string) {
    return this.http.get(this.apiLink + 'articles?tag=' + filter);
  }

  getFilteredArticlesWithOffset(filter: string, offset: string) {
    // Limit is predefined at 10
    return this.http.get(this.apiLink + 'articles?tag=' + filter + '&limit=10&offset=' + offset);
  }

  postRegisterUser(userDict: object) {
    return this.http.post(this.apiLink + 'users', userDict);
  }

  postLogInUser(userDict: object) {
    return this.http.post(this.apiLink + 'users/login', userDict);
  }

  getCurrentUser() {
    return this.http.get(this.apiLink + 'user', {headers: {
      'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: 'Token ' + this.authService.token,
      }});
  }

  postUpdateUser(image: string, username: string, bio: string, email: string, password: string) {
    return this.http.put(this.apiLink + 'user',
      {
        user: {
          email, image, username, bio, password,
        }
      },
      {headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Token ${this.authService.getCurrentToken()}`,
      }});
  }

  postArticles(title: string, description: string, body: string, tagList: any) {
    return this.http.post(this.apiLink + 'articles', {
      article: {
        title, description, body, tagList
      }
    }, { headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Token ${this.authService.getCurrentToken()}`,
      }
    });
  }

  getArticlesByAuthor(author: string) {
    return this.http.get(this.apiLink + 'articles?author=' + author);
  }

  getArticlesByAuthorWithOffset(author: string, offset: string) {
    return this.http.get(this.apiLink + 'articles?author=' + author + '&limit=10&offset=' + offset);
  }

  getYourFeed() {
    return this.http.get(this.apiLink + 'articles/feed', {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Token ${this.authService.getCurrentToken()}`,
      }
    });
  }

  getYourFeedWithOffset(offset: string) {
    return this.http.get(this.apiLink + 'articles/feed?limit=10&offset=' + offset, {headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Token ${this.authService.getCurrentToken()}`,
      }});
  }

  postFavoriteArticle(slug: string) {
    return this.http.post(this.apiLink + 'articles/' + slug + '/favorite', {},
      { headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Token ${this.authService.getCurrentToken()}`,
      }
    });
  }

  delUnfavoriteArticle(slug: string) {
    return this.http.delete(this.apiLink + 'articles/' + slug + '/favorite', {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Token ${this.authService.getCurrentToken()}`,
      }
    });
  }

  getFavoritedByUsername(username: string) {
    return this.http.get(this.apiLink + 'articles?favorited=' + username);
  }

  getFavoritedByUsernameWithOffset(username: string, offset: string) {
    return this.http.get(this.apiLink + 'articles?favorited=' + username + '&limit=10&offset=' + offset);
  }

  getProfile(username: string) {
    return this.http.get(this.apiLink + 'profiles/' + username, {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Token ${this.authService.getCurrentToken()}`,
      }
    });
  }

  getSingleArticleBySlug(slug: string) {
    return this.http.get(this.apiLink + 'articles/' + slug, {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Token ${this.authService.getCurrentToken()}`,
      }
    });
  }

  delArticle(article: Article) {
    return this.http.delete(this.apiLink + 'articles/' + article.slug,
      {headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Token ${this.authService.getCurrentToken()}`,
      }});
  }

  postCreateCommentForArticle(slug: string, comment: string) {
    return this.http.post(this.apiLink + 'articles/' + slug + '/comments',
      {
        comment: {
          body: comment,
        }
      },
      {headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          Authorization: `Token ${this.authService.getCurrentToken()}`,
        }});
  }

  getAllCommentsForArticle(slug: string) {
    return this.http.get(this.apiLink + 'articles/' + slug + '/comments', {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Token ${this.authService.getCurrentToken()}`,
      }
    });
  }

  getAllCommentsForArticleWithoutAuth(slug: string) {
    return this.http.get(this.apiLink + 'articles/' + slug + '/comments', {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }
    });
  }

  deleteCommentForArticle(slug: string, commentId: number) {
    return this.http.delete(this.apiLink + 'articles/' + slug + '/comments/' + commentId, {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Token ${this.authService.getCurrentToken()}`,
      }});
  }

  postFollowProfile(username: string, email: string) {
    return this.http.post(this.apiLink + 'profiles/' + username + '/follow',
      {
        user: {
          email,
        }
      },
      { headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          Authorization: `Token ${this.authService.getCurrentToken()}`,
        }});
  }

  delUnfollowProfile(username: string) {
    return this.http.delete(this.apiLink + '/profiles/' + username + '/follow', {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Token ${this.authService.getCurrentToken()}`,
      }
    });
  }

}

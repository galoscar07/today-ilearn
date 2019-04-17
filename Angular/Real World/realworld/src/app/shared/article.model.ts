export class Article {
  public title = '';
  public slug = '';
  public body = '';
  public createdAt = '';
  public updatedAt = '';
  public tagList = [];
  public description = '';
  public username = '';
  public bio = '';
  public image = '';
  public following = true;
  public favorited = true;
  public favoritesCount = 0;

  constructor( article: any) {
    if (!article) {
      this.title = '';
      this.slug = '';
      this.body = '';
      this.createdAt = '';
      this.updatedAt = '';
      this.tagList = [];
      this.description = '';
      this.username = '';
      this.bio = '';
      this.image = '';
      this.following = false;
      this.favorited = false;
      this.favoritesCount = 0;
    } else {
      this.title = article.title;
      this.slug = article.slug;
      this.body = article.bio;
      this.createdAt = article.createdAt.toString();
      this.updatedAt = article.updatedAt.toString();
      this.tagList = [...article.tagList];
      this.description = article.description;
      this.username = (article.author) ? article.author.username : article.username;
      this.bio = (article.author) ? article.author.bio : article.bio;
      this.image = (article.author) ? article.author.image : article.image;
      this.following = (article.author) ? article.author.following : article.following;
      this.favorited = article.favorited;
      this.favoritesCount = article.favoritesCount;
    }
  }
}

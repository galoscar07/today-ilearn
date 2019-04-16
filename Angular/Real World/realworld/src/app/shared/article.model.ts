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
    this.title = article.title;
    this.slug = article.slug;
    this.body = article.bio;
    this.createdAt = article.createdAt.toString();
    this.updatedAt = article.updatedAt.toString();
    this.tagList = [...article.tagList];
    this.description = article.description;
    this.username = article.author.username;
    this.bio = article.author.bio;
    this.image = article.author.image;
    this.following = article.author.following;
    this.favorited = article.favorited;
    this.favoritesCount = article.favoritesCount;

  }
}

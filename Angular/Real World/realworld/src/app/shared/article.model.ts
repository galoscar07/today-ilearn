export class Article {
  public title: string;
  public slug: string;
  public body: string;
  public createdAt: string;
  public updatedAt: string;
  public tagList: string[];
  public description: string;
  public username: string;
  public bio: string;
  public image: string;
  public following: boolean;
  public favorited: boolean;
  public favoritesCount: number;

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

export class Comments {
  bio: string = null;
  following: boolean = null;
  image: string = null;
  username: string = null;
  body: string = null;
  createdAt: string = null;
  id: number = null;
  updatedAt: string = null;


  constructor(comment: any) {
    this.bio = comment.author.bio;
    this.following = comment.author.following;
    this.image = comment.author.image;
    this.username = comment.author.username;
    this.body = comment.body;
    this.createdAt = comment.createdAt;
    this.id = comment.id;
    this.updatedAt = comment.updatedAt;
  }
}

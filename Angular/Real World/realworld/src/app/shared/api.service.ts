import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {
  apiLink = 'https://conduit.productionready.io/api/';

  constructor(private http: HttpClient) {}

  getAllTags() {
    return this.http.get(this.apiLink + 'tags');
  }

  getAllArticlesWithoutAuth() {
    return this.http.get(this.apiLink + 'articles');
  }

  getFilteredArticled(filter: string) {
    return this.http.get(this.apiLink + 'articles?tag=' + filter);
  }


}

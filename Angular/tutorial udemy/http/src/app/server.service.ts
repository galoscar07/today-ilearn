import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    const header = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-10cca.firebaseio.com/data.json',
    //   servers,
    //   { headers: header} );
    return this.http.put('https://udemy-ng-10cca.firebaseio.com/data.json',
      servers,
      { headers: header} );
  }

  getServers() {
    return this.http.get('https://udemy-ng-10cca.firebaseio.com/data')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something went wrong');
        }
      );
  }
  getAppName() {
    return this.http.get('https://udemy-ng-10cca.firebaseio.com/appName.json')
      .map(
        (response:Response) => {
          return response.json();
        }
      );

  }
}

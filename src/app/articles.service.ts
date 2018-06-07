import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


/*
  This Service sends back the desired data

  By sending an HTTP GET to our server
  API_URL = 'http://localhost:3000/api/articles/';

*/

@Injectable()
export class ArticlesService {
  API_URL: string = 'http://localhost:3000/api/articles';
  articles: any;

  constructor(private http: HttpClient) { }

  /*

  These function acts based on the suffix
  Right now we have 4 possible suffixes
  i) '/'
  ii) '/orderTitle'
  iii) '/orderDate'
  iv) '/searchTitle?title='

  */

  //This function is used only for search queries , and is an approach without observable
  async getSearchedQuery(suffix: string) {

    await this.http.get(this.API_URL + suffix)
    .subscribe( (data: any) => {
      //we pass to the articles variable , the data.articles
      this.articles = data.articles.map( value => {

        //Transforming the timestamp to DateString , and then we split to only the first space.
        //We also cast to interget using a typescript technique , the + operator sticked to the variable.
        let createdAt = new Date(+value.createdat).toDateString();

        //Date format : MMM DD YYYY
        createdAt = createdAt.substr(createdAt.indexOf(' ') + 1);

        //for each mapped value, we return the object we are seeking
        return {
          article_id: value.article_id,
          title : value.title,
          thumbnail: value.thumbnail,
          creator : {
            name: value.creator.name,
            profileUrl: value.creator.profileurl
          },
          createdAt: createdAt
        };

      });
    }, err => {
      //If we have an error
      if (err) {

      }
    });

    return this.getArticles();

  }

  getArticles() {
    return this.articles;
  }

  //This function is used for our '/api/articles/' '/api/articles/orderTitle' '/api/articles/orderDate'
  //and is an approach with observable []
  getObsArticles (suffix: string): Observable<any[]> {
    //returns the observable with mapped result
    return this.http.get(this.API_URL + suffix)
     .map( (data: any) => {
        //ffor any mapped value we access the articles key
        return data.articles.map(value => {

          //Transforming the timestamp to DateString , and then we split to only the first space.
          //We also cast to interget using a typescript technique , the + operator sticked to the variable.
          let createdAt = new Date(+value.createdat).toDateString();

          //Date format : MMM DD YYYY
          createdAt = createdAt.substr(createdAt.indexOf(' ') + 1);

          //for each mapped value, we return the object we are seeking
          return {
            article_id: value.article_id,
            title : value.title,
            thumbnail: value.thumbnail,
            creator : {
              name: value.creator.name,
              profileUrl: value.creator.profileurl
            },
            createdAt: createdAt
          };
        });
    });
  }

}

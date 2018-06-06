import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable()
export class ArticlesService {
  API_URL: string = 'http://localhost:3000/api/articles/';
  articles: any;

  constructor(private http: HttpClient) { }

  /*

  This function acts based on the suffix
  Right now we have 4 possible suffixes
  i) ''
  ii) 'orderTitle'
  iii) 'orderDate'
  iv) 'searchTitle?title='

  */

  async getArticles(suffix: string) {
    const httpOptions = {
      headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})
    };

    await this.http.get(this.API_URL + suffix)
    .subscribe( (data: any) => {
      //we pass to the articles variable , the data.articles
      this.articles = data.articles.map(value => {

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
        this.articles = [];
      }
    });

    //when await is finished , we return the articles
    return this.articles;

  }

}

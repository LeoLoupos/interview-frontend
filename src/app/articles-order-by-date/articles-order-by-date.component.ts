import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-articles-order-by-date',
  templateUrl: './articles-order-by-date.component.html',
  styleUrls: ['./articles-order-by-date.component.css']
})
export class ArticlesOrderByDateComponent implements OnInit {
  articles_orderDate: any;

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    await this.http.get('http://localhost:3000/api/articles/orderdate').subscribe( (data: any) => {
      //we pass to the articles , the data.orders
      this.articles_orderDate = data.articles.map(value => {

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
      });//end of map
      
    }, err => {
      // if (err.status === 401) {
      // } else {
      // }
    });
  }

}
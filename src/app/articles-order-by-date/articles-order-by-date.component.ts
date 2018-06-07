import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles-order-by-date',
  templateUrl: './articles-order-by-date.component.html',
  styleUrls: ['./articles-order-by-date.component.css']
})
export class ArticlesOrderByDateComponent implements OnInit {

  //Articles that we retrieve from ArticlesService
  articles_orderDate: any [];

  constructor(private articlesService: ArticlesService) { }

  async ngOnInit() {

    try {
      // Getting the orderDate path
      // /api/articles/orderDate
      await this.articlesService.getObsArticles('/orderDate').subscribe( data => {
        this.articles_orderDate = data;
      });
    } catch (e) {
      console.error(e);
    }
  }

}

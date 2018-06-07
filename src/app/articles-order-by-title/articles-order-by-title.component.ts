import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';


@Component({
  selector: 'app-articles-order-by-title',
  templateUrl: './articles-order-by-title.component.html',
  styleUrls: ['./articles-order-by-title.component.css']
})
export class ArticlesOrderByTitleComponent implements OnInit {

  //Articles that we retrieve from ArticlesService
  articles_orderTitle: any [];

  constructor(private articlesService: ArticlesService) { }

  async ngOnInit() {
    try {
      // Getting the orderTitle path
      // /api/articles/orderTitle
      await this.articlesService.getObsArticles('/orderTitle').subscribe( data => {
        this.articles_orderTitle = data;
      });
    } catch (e) {
      console.error(e);
    }
  }

}

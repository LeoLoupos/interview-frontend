import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';


@Component({
  selector: 'app-articles-order-by-title',
  templateUrl: './articles-order-by-title.component.html',
  styleUrls: ['./articles-order-by-title.component.css']
})
export class ArticlesOrderByTitleComponent implements OnInit {
  articles_orderTitle: any [];

  constructor(private articlesService: ArticlesService) { }

  async ngOnInit() {
    // Getting the orderTitle path
    // /api/articles/orderTitle
    await this.articlesService.getObsArticles('/orderTitle').subscribe( data => {
      this.articles_orderTitle = data;
    });
  }

}

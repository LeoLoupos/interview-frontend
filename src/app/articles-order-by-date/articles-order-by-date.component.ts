import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles-order-by-date',
  templateUrl: './articles-order-by-date.component.html',
  styleUrls: ['./articles-order-by-date.component.css']
})
export class ArticlesOrderByDateComponent implements OnInit {

  articles_orderDate: any;

  constructor(private articlesService: ArticlesService) { }

  async ngOnInit() {
    // Getting the orderDate path
    // /api/articles/orderDate
    this.articles_orderDate = await this.articlesService.getDataBySuffix(`/orderDate`);
  }

}

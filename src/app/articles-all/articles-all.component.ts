import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles-all',
  templateUrl: './articles-all.component.html',
  styleUrls: ['./articles-all.component.css']
})
export class ArticlesAllComponent implements OnInit {

  articles: any;

  constructor(private articlesService: ArticlesService) { }

  async ngOnInit() {
    // Getting the root path
    // /api/articles/
    this.articles = await this.articlesService.getDataBySuffix(`/`);
  }

}

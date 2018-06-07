import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-articles-all',
  templateUrl: './articles-all.component.html',
  styleUrls: ['./articles-all.component.css']
})
export class ArticlesAllComponent implements OnInit {

  //Articles that we retrieve from ArticlesService
  articles: any[];

  constructor(private articlesService: ArticlesService) { }

  async ngOnInit() {
    try {
      // Getting the root path
      // /api/articles/
      await this.articlesService.getObsArticles('/').subscribe( data => {
        this.articles = data;
      });
    } catch (e) {
      console.error(e);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles-search',
  templateUrl: './articles-search.component.html',
  styleUrls: ['./articles-search.component.css']
})
export class ArticlesSearchComponent implements OnInit {
  articles: any;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
  }

  //on every keystroke we listen the input value
  async onKey(event: any) {
    // Getting the searchTitle path
    // /api/articles/searchTitle?title=
    this.articles = await this.articlesService.getArticles(`searchTitle?title=${event.target.value.trim()}`);
  }

}

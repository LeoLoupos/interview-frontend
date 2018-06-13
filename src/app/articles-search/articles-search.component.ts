import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles-search',
  templateUrl: './articles-search.component.html',
  styleUrls: ['./articles-search.component.css']
})
export class ArticlesSearchComponent implements OnInit {
  articles: any [];

  constructor(private articlesService: ArticlesService) { }

  async ngOnInit() {
  }

  //on every keystroke we listen the input value
  async onKey(event: any) {
    //avoid sending request when search bar is not validated
    if (this.validateSearchInput(event.target.value)) {

      // Getting the searchTitle path
      // /api/articles/searchTitle?title=
      this.articles = await this.articlesService.getSearchedQuery(`/searchTitle?title=${event.target.value.trim()}`);
    } else {
      this.articles = [];
    }
  }

  validateSearchInput(value: any) {
    const validTitle = typeof value === 'string' && value.trim() !== '';

    return validTitle;
  }

}

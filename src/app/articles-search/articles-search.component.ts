import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles-search',
  templateUrl: './articles-search.component.html',
  styleUrls: ['./articles-search.component.css']
})
export class ArticlesSearchComponent implements OnInit {

  //Articles that we retrieve from ArticlesService
  articles: any [];

  constructor(private articlesService: ArticlesService) { }

  async ngOnInit() {
  }

  //on every keystroke we listen the input value
  async onKey(event: any) {
    //avoid sending request when search bar is empty
    if (event.target.value.trim() !== '') {
      try {
        // Getting the searchTitle path
        // /api/articles/searchTitle?title=
        this.articles = await this.articlesService.getSearchedQuery(`/searchTitle?title=${event.target.value.trim()}`);
      } catch (e) {
        console.error(e);
      }

    }
  }

}

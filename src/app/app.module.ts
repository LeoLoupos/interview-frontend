import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticlesAllComponent } from './articles-all/articles-all.component';
import { ArticlesOrderByTitleComponent } from './articles-order-by-title/articles-order-by-title.component';
import { ArticlesOrderByDateComponent } from './articles-order-by-date/articles-order-by-date.component';
import { ArticlesSearchComponent } from './articles-search/articles-search.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesAllComponent,
    ArticlesOrderByTitleComponent,
    ArticlesOrderByDateComponent,
    ArticlesSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

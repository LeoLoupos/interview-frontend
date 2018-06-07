import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Deafult page = home_page
  loadedFeature = 'home_page';

  /*

  loadedFeature can be :
    home_page
    articles_all
    articles_orderBy_title
    articles_orderBy_date
    articles_search
  */

  //Get data from the app-header.component
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}

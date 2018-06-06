import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Setting up , the Home page
  loadedFeature = 'home_page';

  //Get data from the app-header.component
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}

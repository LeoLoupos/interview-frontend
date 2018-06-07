import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  //Nav bar selected Tab
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    //Emit the value to the app.component.ts
    this.featureSelected.emit(feature);
  }

}

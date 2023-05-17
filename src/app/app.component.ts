import { Component } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agoura';
    
    constructor(private iconSetService: IconSetService){
      iconSetService.icons = { ...iconSubset };

    }
}

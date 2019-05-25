import { Component } from '@angular/core';
import { Format } from './control-panel/control-panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple Text Editor';

  onFormatChange(event: Format): void {
    console.log('onFormatChange', event);
  }
}

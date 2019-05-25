import { Component } from '@angular/core';
import { Format } from './control-panel/control-panel.component';
import { TextService } from './text-service/text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple Text Editor';

  constructor(private textService: TextService) {}

  onFormatChange(event: Format): void {
    this.textService.onFormatChange$.next(event);
  }
}

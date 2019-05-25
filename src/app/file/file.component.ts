import { ChangeDetectionStrategy, Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { Format } from '../control-panel/control-panel.component';
import { fromEvent } from 'rxjs';
import { takeLast, last, delay } from 'rxjs/operators';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit {
  @ViewChild('editor') editor: ViewContainerRef;

  text$: Promise<string>;
  selectedWord: string;

  constructor(private textService: TextService, private http: HttpClient) {
  }

  ngOnInit() {
    this.text$ = this.textService.getMockText();

    this.textService.onFormatChange$.subscribe(this.onFormatChange.bind(this));

    fromEvent(document, 'selectstart').pipe(
      delay(500)
    ).subscribe( word => {
      console.log(document.getSelection(), 'start');
    });
  }

  onDoubleClick() {
    console.log(window.getSelection().toString());
  }

  private onFormatChange(format: Format): void {
    document.execCommand(format, false);
  }
}

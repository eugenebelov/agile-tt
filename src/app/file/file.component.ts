import { ChangeDetectionStrategy, Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { Format } from '../control-panel/control-panel.component';
import { fromEvent } from 'rxjs';
import { delay, first, take } from 'rxjs/operators';

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

  constructor(private textService: TextService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.text$ = this.textService.getMockText();

    this.textService.onFormatChange$.subscribe(this.onFormatChange.bind(this));

    fromEvent(document, 'selectionchange').pipe(
    ).subscribe( word => {
      const selection = document.getSelection().toString();
      if (selection !== '') {
        this.selectedWord = selection;
        this.cdr.markForCheck();
        console.log(this.selectedWord);
      }
    });
  }

  private onFormatChange(format: Format): void {
    document.execCommand(format, false);
  }
}

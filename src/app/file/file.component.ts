import { ChangeDetectionStrategy, Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { Format } from '../control-panel/control-panel.component';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit {
  @ViewChild('editor') editor: ViewContainerRef;

  text$: Promise<string>;

  constructor(private textService: TextService) {
  }

  ngOnInit() {
    this.text$ = this.textService.getMockText();

    this.textService.onFormatChange$.subscribe(this.onFormatChange.bind(this));
  }

  private onFormatChange(format: Format): void {
    document.execCommand(format, false);
  }
}

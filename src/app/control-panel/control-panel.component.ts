import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';

export type Format = 'bold' | 'italic' | 'underline';

export enum FORMATS {
  BOLD = 'bold',
  ITALIC = 'italic',
  UNDERLINE = 'underline',
}

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent {
  @Output() formatChange: EventEmitter<Format> = new EventEmitter();

  onFormatChange(format: Format): void {
    this.formatChange.emit(format);
  }
}

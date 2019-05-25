import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-datamuse',
  templateUrl: './datamuse.component.html',
  styleUrls: ['./datamuse.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatamuseComponent implements OnInit, OnChanges {

  @Input() synonym: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}

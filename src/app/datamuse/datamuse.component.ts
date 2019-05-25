import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DatamuseService } from './datamuse.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-datamuse',
  templateUrl: './datamuse.component.html',
  styleUrls: ['./datamuse.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatamuseComponent implements OnInit, OnChanges {

  @Input() synonym: object;
  synonims$;

  constructor(private datamuse: DatamuseService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.synonym.currentValue !== '') {
      this.synonims$ = this.datamuse.getSynonym(changes.synonym.currentValue).pipe(
        map(data => data.map(item => item.word))
      );
    }
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamuseComponent } from './datamuse.component';

describe('DatamuseComponent', () => {
  let component: DatamuseComponent;
  let fixture: ComponentFixture<DatamuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

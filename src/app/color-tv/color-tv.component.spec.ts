import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTvComponent } from './color-tv.component';

describe('ColorTvComponent', () => {
  let component: ColorTvComponent;
  let fixture: ComponentFixture<ColorTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

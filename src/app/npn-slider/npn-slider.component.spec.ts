import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpnSliderComponent } from './npn-slider.component';

describe('NpnSliderComponent', () => {
  let component: NpnSliderComponent;
  let fixture: ComponentFixture<NpnSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpnSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpnSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

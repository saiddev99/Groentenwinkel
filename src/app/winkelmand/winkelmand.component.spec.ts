import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkelmandComponent } from './winkelmand.component';

describe('WinkelmandComponent', () => {
  let component: WinkelmandComponent;
  let fixture: ComponentFixture<WinkelmandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinkelmandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinkelmandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellingFormulierComponent } from './bestelling-formulier.component';

describe('BestellingFormulierComponent', () => {
  let component: BestellingFormulierComponent;
  let fixture: ComponentFixture<BestellingFormulierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestellingFormulierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestellingFormulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

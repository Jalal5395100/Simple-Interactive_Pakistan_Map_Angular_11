import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PakmapComponent } from './pakmap.component';

describe('PakmapComponent', () => {
  let component: PakmapComponent;
  let fixture: ComponentFixture<PakmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PakmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PakmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

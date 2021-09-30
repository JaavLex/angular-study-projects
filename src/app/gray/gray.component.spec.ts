import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayComponent } from './gray.component';

describe('GrayComponent', () => {
  let component: GrayComponent;
  let fixture: ComponentFixture<GrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

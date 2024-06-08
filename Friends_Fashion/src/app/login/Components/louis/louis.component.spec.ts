import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LouisComponent } from './louis.component';

describe('LouisComponent', () => {
  let component: LouisComponent;
  let fixture: ComponentFixture<LouisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LouisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LouisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

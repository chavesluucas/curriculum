import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseApiComponent } from './use-api.component';

describe('UseApiComponent', () => {
  let component: UseApiComponent;
  let fixture: ComponentFixture<UseApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

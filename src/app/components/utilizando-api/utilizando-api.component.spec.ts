import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizandoApiComponent } from './utilizando-api.component';

describe('UtilizandoApiComponent', () => {
  let component: UtilizandoApiComponent;
  let fixture: ComponentFixture<UtilizandoApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilizandoApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizandoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

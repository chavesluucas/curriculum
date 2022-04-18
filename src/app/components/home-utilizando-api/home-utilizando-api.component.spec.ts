import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUtilizandoApiComponent } from './home-utilizando-api.component';

describe('HomeUtilizandoApiComponent', () => {
  let component: HomeUtilizandoApiComponent;
  let fixture: ComponentFixture<HomeUtilizandoApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUtilizandoApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUtilizandoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

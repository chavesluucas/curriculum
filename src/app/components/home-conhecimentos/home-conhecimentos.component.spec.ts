import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConhecimentosComponent } from './home-conhecimentos.component';

describe('HomeConhecimentosComponent', () => {
  let component: HomeConhecimentosComponent;
  let fixture: ComponentFixture<HomeConhecimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeConhecimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConhecimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

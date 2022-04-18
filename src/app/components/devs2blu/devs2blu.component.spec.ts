import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Devs2bluComponent } from './devs2blu.component';

describe('Devs2bluComponent', () => {
  let component: Devs2bluComponent;
  let fixture: ComponentFixture<Devs2bluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Devs2bluComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Devs2bluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

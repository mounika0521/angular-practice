import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChildComponentComponent } from './first-child-component.component';

describe('FirstChildComponentComponent', () => {
  let component: FirstChildComponentComponent;
  let fixture: ComponentFixture<FirstChildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstChildComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

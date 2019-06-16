import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffPage } from './stuff.page';

describe('StuffPage', () => {
  let component: StuffPage;
  let fixture: ComponentFixture<StuffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

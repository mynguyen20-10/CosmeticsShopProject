import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KemduongComponent } from './kemduong.component';

describe('KemduongComponent', () => {
  let component: KemduongComponent;
  let fixture: ComponentFixture<KemduongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KemduongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KemduongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

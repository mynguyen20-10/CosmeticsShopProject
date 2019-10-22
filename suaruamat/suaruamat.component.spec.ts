import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaruamatComponent } from './suaruamat.component';

describe('SuaruamatComponent', () => {
  let component: SuaruamatComponent;
  let fixture: ComponentFixture<SuaruamatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaruamatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaruamatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

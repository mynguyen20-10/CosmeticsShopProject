import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatnaComponent } from './matna.component';

describe('MatnaComponent', () => {
  let component: MatnaComponent;
  let fixture: ComponentFixture<MatnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

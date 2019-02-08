import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisCenterDetailComponent } from './crisis-center-detail.component';

describe('CrisisCenterDetailComponent', () => {
  let component: CrisisCenterDetailComponent;
  let fixture: ComponentFixture<CrisisCenterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisCenterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisCenterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

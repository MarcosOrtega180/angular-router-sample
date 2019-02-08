import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisCenterListComponent } from './crisis-center-list.component';

describe('CrisisCenterListComponent', () => {
  let component: CrisisCenterListComponent;
  let fixture: ComponentFixture<CrisisCenterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisCenterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisCenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

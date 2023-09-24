import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentComponent } from './ListStudentComponent';

describe('ListStudentComponent', () => {
  let component: ListStudentComponent;
  let fixture: ComponentFixture<ListStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListStudentComponent]
    });
    fixture = TestBed.createComponent(ListStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

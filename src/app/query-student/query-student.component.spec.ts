import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryStudentComponent } from './query-student.component';

describe('QueryStudentComponent', () => {
  let component: QueryStudentComponent;
  let fixture: ComponentFixture<QueryStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

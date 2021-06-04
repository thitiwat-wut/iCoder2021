import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpStudentService } from '../http-student.service';
import { Student, StudentCondition } from '../student';

@Component({
  selector: 'app-query-student',
  templateUrl: './query-student.component.html',
  styleUrls: ['./query-student.component.css'],
})
export class QueryStudentComponent implements OnInit {
  studentList: Student[] = [];
  conditionFormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    tel: new FormControl(),
  });
  constructor(private studentService: HttpStudentService) {}

  ngOnInit(): void {}

  queryStudent() {
    const condition: StudentCondition = this.conditionFormGroup.getRawValue();

    this.studentService.queryStudentAll(condition).subscribe((response) => {
      this.studentList = response.result;
    });
  }

  resetStudent() {
    this.studentList = [];
  }
}

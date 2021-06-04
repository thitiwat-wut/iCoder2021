import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student, StudentCondition } from './student';

@Injectable({
  providedIn: 'root'
})
export class HttpStudentService {

  constructor(private http:HttpClient) { }

  queryStudentAll(condition : StudentCondition){
    let params = new HttpParams();
    if(condition.name){
      params = params.set('name',condition.name);
    }
    if(condition.email){
      params = params.set('email',condition.email);
    }
    if(condition.tel){
      params = params.set('tel',condition.tel);
    }
    return this.http.get<{result: Student[]}>('/training-demo/student/all',{ params: params})
  }
}

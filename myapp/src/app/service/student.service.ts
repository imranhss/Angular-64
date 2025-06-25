import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Student } from '../../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl: string = "http://localhost:3000/students";

  constructor(private http: HttpClient) { }


  getAllStudent(): Observable<any> {

    return this.http.get(this.baseUrl);

  }

  saveStudent(student: Student): Observable<any> {

    return this.http.post(this.baseUrl, student);

  }

  deleteStudent(id: string): Observable<any> {

    return this.http.delete(this.baseUrl + "/" + id);

  }

  getStudentById(id: string): Observable<any> {

    return this.http.get(this.baseUrl+'/'+id);

  }

  updateStudent(id: string, student: Student): Observable<any>{

    return this.http.put(this.baseUrl+'/'+id, student);

  }



  //   private handleError(error: any) {
  //   console.error('An error occurred:', error);
  //   return throwError(() => new Error('test'));
  // }



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = "http://localhost:3000/Student"

  constructor(private http:HttpClient) { }

  GetAllStudent(): Observable<any>{
    return this.http.get(this.url);
  }

  saveStudentData(data:any){
    return this.http.post(this.url, data)
  }

  deleteStudent(id: any) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getIndividualStudent(id: any) {
    return this.http.get(`${this.url}/${id}`)
  }

  update(id:number, data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
}

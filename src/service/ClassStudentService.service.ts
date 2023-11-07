import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { GetClassStudent } from 'src/main/model/classStudentModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};
const apiUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class ClassStudentServiceService {

  constructor(private http: HttpClient) {}
  getAllClassStudent():Observable<GetClassStudent[]>{
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please authenticate first.');
    }
    // Đặt token vào tiêu đề của yêu cầu HTTP
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(apiUrl+ "/ClassStudent/GetAll?pageNo=0&pageSize=999",{headers}).pipe(
      map(response => response.Data)
    );
  }
}

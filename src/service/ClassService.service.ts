import { TokenData } from './../account/Moduls/AccountModuls';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AddNewClass, GetClass, UpdateClass } from 'src/main/model/classModel';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};
const apiUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root',
})
export class ClassServiceService {
  constructor(private http: HttpClient) { }

  getAllClass(): Observable<GetClass[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please authenticate first.');
    }
    // Đặt token vào tiêu đề của yêu cầu HTTP
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(apiUrl + "/classes/GetAll?pageNo=0&pageSize=999", { headers }).pipe(
      map(response => response.Data)
    );
  }

  createClass(body: AddNewClass): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please authenticate first.');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(apiUrl + `/classes/AddNew`, body, { headers });
  }


  updateClass(body: UpdateClass): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please authenticate first.');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<any>(apiUrl + `/classes/Update`, body, { headers });
  }

  detailClass(id: number | undefined): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please authenticate first.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(apiUrl + `/classes/GetClass/${id}`, { headers })
      .pipe(map(response => response.Data));
  }

  deleteClass(id: number | undefined): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please authenticate first.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<any>(apiUrl + `/classes/Delete/${id}`, { headers })
  }

}

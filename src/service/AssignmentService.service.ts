import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AddNewAssignment, GetAssignment, UpdateAssignment } from 'src/main/model/assignmentModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};
const apiUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root',
})
export class AssignmentServiceService {

  constructor(private http: HttpClient) { }

  getAllAssignmnet(): Observable<GetAssignment[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please authenticate first.');
    }
    // Đặt token vào tiêu đề của yêu cầu HTTP
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .get<any>(apiUrl + `/assignments/GetAll?pageNo=0&pageSize=999`, {
        headers,
      })
      .pipe(map((response) => response.Data));
  }


  createAssignment(body: AddNewAssignment): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please authenticate first.');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(apiUrl + `/assignments/AddNew`, body, { headers });
  }

  
  updateAssignment(body: UpdateAssignment): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please authenticate first.');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<any>(apiUrl + `/assignments/Update`, body, { headers });
  }

  detailAssignment(id: number | undefined): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please authenticate first.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(apiUrl + `/assignments/GetAssignment/${id}`, { headers })
    .pipe(map(response => response.Data));
  }
}

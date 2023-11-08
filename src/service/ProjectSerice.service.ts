import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AddProject, ListProject, UpdateProject } from 'src/main/model/projectModel';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};
const apiUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

constructor(private http: HttpClient) { }

getAllProject(): Observable<ListProject[]> {
  // Lấy token từ local storage hoặc bất kỳ nguồn nào bạn lưu trữ
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }
  // Đặt token vào tiêu đề của yêu cầu HTTP
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<any>("http://localhost:8080/api/projects/GetAll?pageNo=0&pageSize=100", { headers })
  .pipe(
    map(response => response.Data)
  );
}


createProject(body: AddProject): Observable<any> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.post<any>(apiUrl + `/projects/AddNew`, body, { headers });
}


updateProject(body: UpdateProject): Observable<any> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.put<any>(apiUrl + `/projects/Update`, body, { headers });
}

detailProject(id: number | undefined): Observable<any> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<any>(apiUrl + `/projects/Getproject/${id}`, { headers })
  .pipe(map(response => response.Data));
}

// deleteProject(id: number | undefined): Observable<any> {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     throw new Error('Token not found. Please authenticate first.');
//   }
//   const headers = new HttpHeaders({
//     'Authorization': `Bearer ${token}`
//   });
//   return this.http.delete<any>(apiUrl + `/assignments/Delete/${id}`, { headers })
// }

}
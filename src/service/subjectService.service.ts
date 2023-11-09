import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CreateAndUpdateSubject, ListSubject, UpdateSubject } from 'src/main/model/models';
@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

constructor(private http: HttpClient) { }

getAllSubject(): Observable<ListSubject[]> {
  // Lấy token từ local storage hoặc bất kỳ nguồn nào bạn lưu trữ
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }
  // Đặt token vào tiêu đề của yêu cầu HTTP
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<any>("http://localhost:8080/api/subjects/GetAll?pageNo=0&pageSize=100", { headers })
  .pipe(
    map(response => response.Data)
  );
}

CreateSubject(body: CreateAndUpdateSubject): Observable<any> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.post<any>("http://localhost:8080/api/subjects/AddNew", body, { headers });
 }

 UpdateSubject(body: ListSubject): Observable<any> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.put<any>("http://localhost:8080/api/subjects/Update", body, { headers });
 }

 SubjectDetail(id: number | undefined): Observable<any> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<any>(`http://localhost:8080/api/subjects/GetSubject/${id}`, { headers })
  .pipe(
    map(response => response.Data)
  );
}

SubjectDelete(id: number | undefined): Observable<any> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.delete<any>(`http://localhost:8080/api/subjects/Delete/${id}`, { headers });
}


}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { GetIssue, CreateIssue, UpdateIssue } from 'src/main/model/issueModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};
const apiUrl = 'http://localhost:8080/api';
@Injectable({
  providedIn: 'root'
})
export class IssueService {

constructor(private http: HttpClient) {}
getAllIssue():Observable<GetIssue[]>{
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }
  // Đặt token vào tiêu đề của yêu cầu HTTP
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.get<any>(apiUrl+ "/issue/GetAll?pageNo=0&pageSize=999",{headers}).pipe(
    map(response => response.Data)
  );
}
CreateIssue(body: CreateIssue): Observable<any> {
  
  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
  });

  return this.http.post<any>('http://localhost:8080/api/issue/AddNew', body, { headers });
}

 UpdateIssue(body: UpdateIssue): Observable<any> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.put<any>("http://localhost:8080/api/issue/Update", body, { headers });
 }

 IssueDetail(id: number | undefined): Observable<any> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<any>(`http://localhost:8080/api/issue/GetIssue/${id}`, { headers })
  .pipe(
    map(response => response.Data)
  );;
}

IssueDelete(id: number | undefined): Observable<any> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.delete<any>(`http://localhost:8080/api/issue/Delete/${id}`, { headers });
}

}

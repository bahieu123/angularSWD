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
  
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjY4ODMzNzM5NDUsImlhdCI6MTY5OTM3Mzk0NSwianRpIjoiMDI4ZTA2YTMtZDA3Yi00M2Q4LTk3YjItNGE2YjdkY2FhMDlkIiwiaXNzIjoib3JkZXItYXBpIiwiYXVkIjoib3JkZXItYXBwIiwic3ViIjoiaGlldTNAZ21haWwuY29tIiwicm9sIjpbIjIiXSwicHJlZmVycmVkX3VzZXJuYW1lIjoiaGlldTNAZ21haWwuY29tIiwiZW1haWwiOiJoaWV1c2xtbW0wMkBnbWFpbC5jb20ifQ.DueDnbKGQ1kcc6r5hfNAQ-KDnsZwb2q0Px-QK4q3JSBkKAF2PdFKAm5zvQoaSOfurCiqClS6oMV5JB3m_tvXQQ';

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
  });

  return this.http.post<any>('http://localhost:8080/api/issue/AddNew', body, { headers });
}

 UpdateIssue(body: UpdateIssue): Observable<any> {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjY4ODMzNzM5NDUsImlhdCI6MTY5OTM3Mzk0NSwianRpIjoiMDI4ZTA2YTMtZDA3Yi00M2Q4LTk3YjItNGE2YjdkY2FhMDlkIiwiaXNzIjoib3JkZXItYXBpIiwiYXVkIjoib3JkZXItYXBwIiwic3ViIjoiaGlldTNAZ21haWwuY29tIiwicm9sIjpbIjIiXSwicHJlZmVycmVkX3VzZXJuYW1lIjoiaGlldTNAZ21haWwuY29tIiwiZW1haWwiOiJoaWV1c2xtbW0wMkBnbWFpbC5jb20ifQ.DueDnbKGQ1kcc6r5hfNAQ-KDnsZwb2q0Px-QK4q3JSBkKAF2PdFKAm5zvQoaSOfurCiqClS6oMV5JB3m_tvXQQ';
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
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjY4ODMzNzM5NDUsImlhdCI6MTY5OTM3Mzk0NSwianRpIjoiMDI4ZTA2YTMtZDA3Yi00M2Q4LTk3YjItNGE2YjdkY2FhMDlkIiwiaXNzIjoib3JkZXItYXBpIiwiYXVkIjoib3JkZXItYXBwIiwic3ViIjoiaGlldTNAZ21haWwuY29tIiwicm9sIjpbIjIiXSwicHJlZmVycmVkX3VzZXJuYW1lIjoiaGlldTNAZ21haWwuY29tIiwiZW1haWwiOiJoaWV1c2xtbW0wMkBnbWFpbC5jb20ifQ.DueDnbKGQ1kcc6r5hfNAQ-KDnsZwb2q0Px-QK4q3JSBkKAF2PdFKAm5zvQoaSOfurCiqClS6oMV5JB3m_tvXQQ';
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.delete<any>(`http://localhost:8080/api/issue/Delete/${id}`, { headers });
}

}

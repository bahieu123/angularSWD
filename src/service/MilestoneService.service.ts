import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { createMilestone, updateMilestone } from 'src/main/model/models';
@Injectable({
  providedIn: 'root'
})
export class MilestoneServiceService {

constructor(private http: HttpClient) { }

GetAllMilestone(): Observable<any[]> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<any>(`http://localhost:8080/api/milestone`, { headers });
}

MilestoneDelete(id: number | undefined): Observable<any> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.patch<any>(`http://localhost:8080/api/milestone/${id}`, { headers });
}

GetDetailMilestone(id: number | undefined): Observable<any> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<any>(`http://localhost:8080/api/milestone/${id}`, { headers });
}

CreateMilestone(body: createMilestone): Observable<any> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.post<any>("http://localhost:8080/api/milestone", body, { headers });
 }

 UpdateMilestone(body: createMilestone,id: number | undefined): Observable<any> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.put<any>(`http://localhost:8080/api/milestone/${id}`, body, { headers });
 }

}

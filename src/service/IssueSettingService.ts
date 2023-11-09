import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { GetIssueSetting } from 'src/main/model/issueSettingModel';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
  };
  const apiUrl = 'http://localhost:8080/api';
  @Injectable({
    providedIn: 'root'
  })
  export class IssueSettingService {
  
  constructor(private http: HttpClient) {}
  getAllIssueSetting():Observable<GetIssueSetting[]>{
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please authenticate first.');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(apiUrl+ "/issueSetting/GetAll?pageNo=0&pageSize=999",{headers}).pipe(
      map(response => response.Data)
    );
  }
}
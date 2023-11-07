import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ListProject } from 'src/main/model/models';
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
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListClass } from 'src/main/model/models';
@Injectable({
  providedIn: 'root'
})
export class ClassServiceService {
  readonly APIUrl = 'http://localhost:8080/api/classes/GetAll?pageNo=0&pageSize=5'
constructor(private http: HttpClient ) { }


/* getAllClasses(): Observable<any[]> {
  debugger
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return new Observable((observer) => {
    fetch(this.APIUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        observer.next(data);
        observer.complete();
      })
      .catch((error) => {
        observer.error(error);
        observer.complete();
      });
  });
} */

getAllClasses(): Observable<any[]> {
  // Lấy token từ local storage hoặc bất kỳ nguồn nào bạn lưu trữ
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please authenticate first.');
  }
  // Đặt token vào tiêu đề của yêu cầu HTTP
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<any[]>(this.APIUrl, { headers });
}

}

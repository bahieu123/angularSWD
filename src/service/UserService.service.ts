import { TokenData } from '../account/Moduls/AccountModuls';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from 'src/main/model/userModel';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};
const apiUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}


  getAllUser():Observable<User[]>{
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please authenticate first.');
    }
    // Đặt token vào tiêu đề của yêu cầu HTTP
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(apiUrl+ "/users?pageNo=0&pageSize=999",{headers}).pipe(
      map(response => response)
    );
  }

  
}

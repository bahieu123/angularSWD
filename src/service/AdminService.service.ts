import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Singup } from 'src/main/model/models';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  readonly APIUrl = "http://localhost:8080/auth";
constructor(private http: HttpClient ) { }

Authenticate(obj: any): Observable<any> {
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  };

  return new Observable((observer) => {
    fetch('http://localhost:8080/auth/authenticate', requestOptions)
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

  
}

forgotPassword(email: string) {
  return this.http.post<any>(`${this.APIUrl}/recover`, { email: email })
    .pipe(map(response => {
        return response;
    }));
}

Singin(body: Singup): Observable<any> {
  return this.http.post<any>(`http://localhost:8080/auth/signup`,body);
}


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  checkUserExists(userEmail: string, userPassword: string): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/api/users/get/${userEmail}/${userPassword}`)
      .pipe(
        map((response: User) => {
          return response;
        })
      );
  }
}

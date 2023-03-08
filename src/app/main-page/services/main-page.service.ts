import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { find } from 'rxjs/operators';

import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  constructor(private http: HttpClient) { }

  getUser(userIdLogged: string): Observable<User | undefined> {
    return this.http.get<User>(`http://localhost:3000/users/${userIdLogged}`)
      .pipe(
        find((response: User) => response.id === parseInt(userIdLogged)));
  }
}

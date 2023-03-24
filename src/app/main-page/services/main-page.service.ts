import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from 'src/app/interfaces/user.interface';
import { Cryptos } from 'src/app/interfaces/cryptos.interface';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  constructor(private http: HttpClient) { }

  getUser(userIdLogged: string): Observable<User | undefined> {
    return this.http.get<User>(`http://localhost:3000/api/users/get/${userIdLogged}`)
      .pipe(
        map((response: User) => response)
      );
  }

  getAllCryptosWithUserCryptos(id: string): Observable<Cryptos[]> {
    return this.http.get<Cryptos[]>(`http://localhost:3000/api/cryptos/get/all/${id}`)
      .pipe(
        map((response: Cryptos[]) => {
          return response;
        })
      );
  }
}

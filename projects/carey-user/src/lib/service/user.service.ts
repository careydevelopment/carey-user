import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserConfig } from '../model/user-config';
import { USER_CONFIG_TOKEN } from '../model/token';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({ providedIn: 'root' })
export class UserService {

  private _user: User = null;

  constructor(private http: HttpClient,
    @Inject(USER_CONFIG_TOKEN) private readonly config: UserConfig) { }

  get user(): User {
    return this._user;
  }

  set user(user: User) {
    this._user = user;
  }

  fetchProfileImage(userId: string): Observable<Blob> {
    let url = `${this.config.baseUrl}/user/${userId}/profileImage`;
    console.log("Profile image URL is " + url);

    return this.http.get(url, { responseType: 'blob' });
  }

  update(userId: string, updatedUser: User): Observable<User> {
    let url = `${this.config.baseUrl}/user/${userId}`;
    console.log("Update user URL is " + url);

    let user$ = this.http.put<User>(url, updatedUser, httpOptions);

    return user$.pipe(
      tap(updatedUser => this._user = updatedUser)
    )
  }
}

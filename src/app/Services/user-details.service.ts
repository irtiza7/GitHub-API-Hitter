import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from '../Interfaces/UserDetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  constructor(private http: HttpClient) {}

  getGithubUserDetails(login: string): Observable<UserDetails> {
    const url = `http://${environment.server_host}:${environment.server_port}/api/github/user/details?login=${login}`;
    return this.http.get<UserDetails>(url);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getGithubUsers(searchTerm: string): Observable<User[]> {
    const url = `http://${environment.server_host}:${environment.server_port}/api/github/users?searchString=${searchTerm}`;
    return this.http.get<User[]>(url);
  }
}

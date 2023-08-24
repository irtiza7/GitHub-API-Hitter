import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Follower } from '../Interfaces/Follower';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FollowersService {
  constructor(private readonly http: HttpClient) {}

  getFollowers(searchString: string): Observable<Follower[]> {
    const url: string = `http://${environment.server_host}:${environment.server_port}/api/github/followers?login=${searchString}`;
    return this.http.get<Follower[]>(url);
  }
}

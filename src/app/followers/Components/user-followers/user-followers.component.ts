import { Component } from '@angular/core';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { Follower } from 'src/app/Interfaces/Follower';
import { FollowersService } from 'src/app/Services/followers.service';

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.scss'],
})
export class UserFollowersComponent {
  listOfFollowers?: Observable<Follower[]>;
  private searchTermSubject: Subject<string> = new Subject<string>();

  constructor(private readonly followersService: FollowersService) {}

  ngOnInit() {
    this.initializeListOfUsers();
  }

  initializeListOfUsers() {
    this.listOfFollowers = this.searchTermSubject.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      switchMap((term: string) => {
        return this.followersService.getFollowers(term);
      })
    );
  }

  publishSearchTerm(event: Event, inputText: string) {
    (event as KeyboardEvent).preventDefault();
    if (inputText.length === 0) {
      this.initializeListOfUsers();
    }
    this.searchTermSubject.next(inputText);
  }

  preventDefaultBehavior(event: any) {
    event.preventDefault();
  }
}

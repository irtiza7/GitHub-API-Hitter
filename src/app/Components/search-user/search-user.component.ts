import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/Services/user.service';
import { User } from '../../Interfaces/User';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent implements OnInit {
  listOfUsers?: Observable<User[]>;
  private searchTermSubject: Subject<string> = new Subject<string>();

  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.initializeListOfUsers();
  }

  initializeListOfUsers() {
    this.listOfUsers = this.searchTermSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        return this.userService.getGithubUsers(term);
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

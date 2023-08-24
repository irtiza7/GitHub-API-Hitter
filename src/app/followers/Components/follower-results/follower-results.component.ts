import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Follower } from 'src/app/Interfaces/Follower';

@Component({
  selector: 'app-follower-results',
  templateUrl: './follower-results.component.html',
  styleUrls: ['./follower-results.component.scss'],
})
export class FollowerResultsComponent {
  @Input() users!: Follower[];
  numberOfUsers: number = 0;
  showAllResults: boolean = false;
  lowerIndex: number = 0;
  upperIndex: number = 10;

  constructor(private readonly router: Router) {}

  ngOnChanges() {
    this.numberOfUsers = this.users.length;
  }

  navigateToUserDetails(login: string) {
    this.router.navigate(['/details', login]);
  }

  toggleShowAllResults() {
    this.showAllResults = !this.showAllResults;
    [this.lowerIndex, this.upperIndex] = this.showAllResults
      ? [0, this.users.length]
      : [0, 10];
  }
  previousResultsPage() {
    if (this.lowerIndex - 10 < 0) {
      this.lowerIndex = 0;
      this.upperIndex = 10;
      console.log(this.lowerIndex, this.upperIndex);
      return;
    }
    this.lowerIndex = this.lowerIndex - 10;
    this.upperIndex = this.upperIndex - 10;
  }
  nextResultsPage() {
    if (this.upperIndex + 10 > this.numberOfUsers) {
      this.upperIndex = this.numberOfUsers;
      return;
    } else {
      this.upperIndex = this.upperIndex + 10;
    }
    this.lowerIndex =
      this.lowerIndex + 10 === this.users.length
        ? this.lowerIndex
        : this.lowerIndex + 10;
  }
}

import { Component, Input, OnChanges } from '@angular/core';
import { User } from '../../Interfaces/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnChanges {
  @Input() users!: User[];
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
      console.log('limit', this.lowerIndex, this.upperIndex);
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

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
  private readonly MAX_RESULTS_PER_PAGE = 10;
  numberOfUsers: number = 0;
  showAllResults: boolean = false;
  lowerIndex: number = 0;
  upperIndex: number = this.MAX_RESULTS_PER_PAGE;

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
      : [0, this.MAX_RESULTS_PER_PAGE];
  }

  previousResultsPage() {
    if (this.lowerIndex - this.MAX_RESULTS_PER_PAGE < 0) {
      this.lowerIndex = 0;
      this.upperIndex = this.MAX_RESULTS_PER_PAGE;
      return;
    }
    this.lowerIndex = this.lowerIndex - this.MAX_RESULTS_PER_PAGE;
    this.upperIndex = this.upperIndex - this.MAX_RESULTS_PER_PAGE;
  }

  nextResultsPage() {
    if (this.upperIndex + this.MAX_RESULTS_PER_PAGE > this.numberOfUsers) {
      this.upperIndex = this.numberOfUsers;
      return;
    } else {
      this.upperIndex = this.upperIndex + this.MAX_RESULTS_PER_PAGE;
    }
    this.lowerIndex =
      this.lowerIndex + this.MAX_RESULTS_PER_PAGE === this.users.length
        ? this.lowerIndex
        : this.lowerIndex + this.MAX_RESULTS_PER_PAGE;
  }
}

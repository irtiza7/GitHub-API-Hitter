import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsService } from 'src/app/Services/user-details.service';
import { UserDetails } from '../../Interfaces/UserDetails';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  userLogin!: string;
  userDetails!: UserDetails;

  constructor(
    private readonly activatedRouter: ActivatedRoute,
    private readonly userDetailsServices: UserDetailsService
  ) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.activatedRouter.paramMap.subscribe((params) => {
      const login = params.get('login');
      this.userLogin = login as string;
    });

    this.userDetailsServices
      .getGithubUserDetails(this.userLogin)
      .subscribe((details) => (this.userDetails = details));
  }
}

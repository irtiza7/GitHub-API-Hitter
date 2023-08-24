import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowersRoutingModule } from './followers-routing.module';
import { FollowersComponent } from './followers.component';
import { UserFollowersComponent } from './Components/user-followers/user-followers.component';
import { FollowerResultsComponent } from './Components/follower-results/follower-results.component';

@NgModule({
  declarations: [
    FollowersComponent,
    UserFollowersComponent,
    FollowerResultsComponent,
  ],
  imports: [CommonModule, FollowersRoutingModule],
})
export class FollowersModule {}

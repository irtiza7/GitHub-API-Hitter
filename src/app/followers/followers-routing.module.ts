import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFollowersComponent } from './Components/user-followers/user-followers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/followers/user-followers',
    pathMatch: 'full',
  },
  {
    path: 'user-followers',
    component: UserFollowersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowersRoutingModule {}

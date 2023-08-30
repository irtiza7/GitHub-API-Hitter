import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { SearchUserComponent } from './Components/search-user/search-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search-user',
    pathMatch: 'full',
  },
  {
    path: 'search-user',
    component: SearchUserComponent,
  },
  {
    path: 'details/:login',
    component: UserDetailsComponent,
  },
  {
    path: 'followers',
    loadChildren: () =>
      import('./followers/followers.module').then((m) => m.FollowersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

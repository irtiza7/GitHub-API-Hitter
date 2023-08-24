import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchUserComponent } from './Components/search-user/search-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SearchResultsComponent } from './Components/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    UserDetailsComponent,
    NavbarComponent,
    SearchResultsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchUserComponent } from './Components/search-user/search-user.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SearchResultsComponent } from './Components/search-results/search-results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServerErrorComponent } from './Components/server-error/server-error.component';
import { ErrorInterceptor } from './Interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    UserDetailsComponent,
    NavbarComponent,
    SearchResultsComponent,
    ServerErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

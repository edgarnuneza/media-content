import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MediaContentComponent } from './media-content/media-content.component';
import { SecondNavbarComponent } from './second-navbar/second-navbar.component';
import { UserContentComponent } from './user-content/user-content.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MediaContentComponent,
    SecondNavbarComponent,
    UserContentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

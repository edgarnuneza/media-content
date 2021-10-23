import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MediaContentComponent } from './media-content/media-content.component';
import { SecondNavbarComponent } from './second-navbar/second-navbar.component';
import { UserContentComponent } from './user-content/user-content.component';
import { LoginComponent } from './login/login.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { AppRoutingModule } from './app-routing.module';
import { UploadComponent } from './upload/upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MediaContentComponent,
    SecondNavbarComponent,
    UserContentComponent,
    LoginComponent,
    ImageModalComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UserModalComponent]
})
export class AppModule { }

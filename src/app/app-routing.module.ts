import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MediaContentComponent } from './media-content/media-content.component';
import { UserContentComponent } from './user-content/user-content.component';


const routes: Routes = [
  { path: '', component: MediaContentComponent },
  { path: 'media', component: MediaContentComponent },
  { path: 'users', component: UserContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

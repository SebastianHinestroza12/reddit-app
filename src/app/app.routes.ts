import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RedditDetailComponent } from './pages/reddit-detail/reddit-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subreddit/:id', component: RedditDetailComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

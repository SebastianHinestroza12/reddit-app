import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { RedditDetailComponent } from './pages/reddit-detail/reddit-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subreddit/:id', component: RedditDetailComponent },
  { path: '**', redirectTo: '' }, // Redirige cualquier ruta desconocida al Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

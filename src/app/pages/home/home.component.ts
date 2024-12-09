import { Component, OnInit } from '@angular/core';
import { RedditService } from '../../services/reddit.service';
import { JsonApiResponse } from '../../interfaces/reddits';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  subreddits: JsonApiResponse = { data: [] };
  loading: boolean = true;
  error: string = '';

  constructor(
    private readonly subredditService: RedditService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.subredditService.createSubreddit().subscribe({
      next: () => {
        this.loadSubreddits();
      },
      error: (error) => {
        console.error('Error al poblar la base de datos:', error);
        this.error = 'Error al inicializar los datos.';
        this.loading = false;
      },
    });
  }

  private loadSubreddits(): void {
    this.subredditService.getSubreddits().subscribe(
      (data) => {
        this.subreddits = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error al cargar los subreddits:', error);
        this.error = 'Error al cargar los subreddits.';
        this.loading = false;
      }
    );
  }

  redirectToShowSubredditDetail(subreddit: string): void {
    this.router.navigate(['/subreddit', subreddit]);
  }
}

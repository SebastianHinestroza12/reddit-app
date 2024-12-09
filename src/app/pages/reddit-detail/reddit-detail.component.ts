import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RedditService } from '../../services/reddit.service';
import { SubRedditDetailIProps } from '../../interfaces/reddits';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-reddit-detail',
  imports: [CommonModule],
  templateUrl: './reddit-detail.component.html',
  styleUrl: './reddit-detail.component.scss',
})
export class RedditDetailComponent implements OnInit {
  subreddit: SubRedditDetailIProps | null = null;
  safeDescriptionHtml: SafeHtml | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly subredditService: RedditService,
    private readonly sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.subredditService.getSubredditById(id).subscribe((data) => {
      const rawDescription = data.data.attributes.description_html ?? '';
      const isEscaped = /&lt;|&gt;|&amp;/.test(rawDescription);

      const unescapedDescription = isEscaped
        ? this.unescapeHtml(rawDescription)
        : rawDescription;

      this.subreddit = data;
      this.safeDescriptionHtml =
        this.sanitizer.bypassSecurityTrustHtml(unescapedDescription);
    });
  }

  unescapeHtml(escaped: string): string {
    if (!isPlatformBrowser(this.platformId)) {
      return escaped;
    }

    const div = document.createElement('div');
    div.innerHTML = escaped;
    return div.textContent ?? div.innerText ?? '';
  }

  goBack(): void {
    window.history.back();
  }
}

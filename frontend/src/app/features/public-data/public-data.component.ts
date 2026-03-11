import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from '../../shared/components/app-layout/app-layout.component';
import { PublicApiService } from '../../core/services/public-api.service';
import { PublicPost } from '../../core/models/public-post.model';

@Component({
  selector: 'app-public-data',
  imports: [CommonModule, AppLayoutComponent],
  templateUrl: './public-data.component.html',
  styleUrl: './public-data.component.css'
})
export class PublicDataComponent implements OnInit {
  posts: PublicPost[] = [];
  loading = true;
  error = '';

  constructor(private publicApiService: PublicApiService) { }

  ngOnInit(): void {
    this.publicApiService.getPosts().subscribe({
      next: (response) => {
        this.posts = response.slice(0, 10);
        this.loading = false;
      },
      error: () => {
        this.error = 'No fue posible cargar la API pública.';
        this.loading = false;
      }
    });
  }

  reload(): void {
    this.loading = true;
    this.error = '';

    this.publicApiService.getPosts().subscribe({
      next: (response) => {
        this.posts = response.slice(0, 10);
        this.loading = false;
      },
      error: () => {
        this.error = 'No fue posible cargar la API pública.';
        this.loading = false;
      }
    });
  }
}
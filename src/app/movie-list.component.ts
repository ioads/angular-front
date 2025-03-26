import { Component, OnInit } from '@angular/core';
import { MovieService } from './tmdb.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importar CommonModule

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe(
      (data) => {
        console.log(data)
        this.movies = data.items;  // Ajuste conforme sua API
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Não foi possível carregar a lista de filmes';
        this.isLoading = false;
      }
    );
  }

  goToDetail(id: number): void {
    this.router.navigate(['/movie', id]);
  }
}

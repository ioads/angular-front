import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieId: number | null = null;
  movieTitle: string = '';
  moviePoster: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;  // Pega o ID do filme da URL
      this.loadMovieDetails(id);  // Carrega os detalhes do filme
    });
  }

  loadMovieDetails(id: number): void {
    // Exemplo simples (substitua isso por uma chamada real a uma API)
    if (id === 1) {
      this.movieTitle = 'Movie 1';
      this.moviePoster = 'https://via.placeholder.com/300';
    } else if (id === 2) {
      this.movieTitle = 'Movie 2';
      this.moviePoster = 'https://via.placeholder.com/300';
    } else if (id === 3) {
      this.movieTitle = 'Movie 3';
      this.moviePoster = 'https://via.placeholder.com/300';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './tmdb.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any = {};
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      console.log('ID do filme:', id);
      this.loadMovieDetails(id);
    });
  }

  loadMovieDetails(id: number): void {
    this.movieService.getMovieDetails(id).subscribe(
      (data) => {
        console.log('Detalhes do filme:', data);
        this.movie = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Erro ao carregar detalhes do filme', error);
        this.errorMessage = 'Não foi possível carregar os detalhes do filme';
        this.isLoading = false;
      }
    );
  }
}

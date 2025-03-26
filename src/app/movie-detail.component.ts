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
  movieId: number = 0;
  movieTitle: string = '';
  moviePoster: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieId = +params.get('id')!;
      this.movieTitle = `Movie ${this.movieId}`;  // Apenas exemplo
      this.moviePoster = 'https://via.placeholder.com/150'; // Exemplo
    });
  }
}

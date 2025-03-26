import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importando o CommonModule

@Component({
  selector: 'app-movie-list',
  standalone: true,  // Marcando como componente standalone
  imports: [CommonModule],  // Importando o CommonModule para usar ngFor
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies = [
    { id: 1, title: 'Movie 1', poster: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Movie 2', poster: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Movie 3', poster: 'https://via.placeholder.com/150' }
  ];

  constructor(private router: Router) {}

  goToDetail(id: number) {
    this.router.navigate(['/movie', id]);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Necessário para usar *ngFor

@Component({
  selector: 'app-movie-list',  // O seletor para ser usado no HTML
  standalone: true,  // Definindo como um componente standalone
  imports: [CommonModule],  // Importando CommonModule para usar *ngFor
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

  goToDetail(id: number): void {
    this.router.navigate(['/movie', id]);  // Navega para a rota de detalhes
  }
}

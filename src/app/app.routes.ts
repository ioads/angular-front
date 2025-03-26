import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from './movie-detail.component';

export const routes: Routes = [
  { path: '', component: MovieListComponent }, // Exibe a lista de filmes na rota raiz
  { path: 'movie/:id', component: MovieDetailComponent } // Exibe os detalhes do filme
];

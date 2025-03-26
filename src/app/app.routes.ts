import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list.component';  // Importando o componente MovieList
import { MovieDetailComponent } from './movie-detail.component';  // Importando o componente MovieDetail

export const routes: Routes = [
  { path: '', component: MovieListComponent },  // Rota para exibir a lista de filmes
  { path: 'movie/:id', component: MovieDetailComponent }  // Rota para exibir detalhes do filme
];

import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieListComponent } from './app/movie-list.component';
import { routes } from './app/app.routes';

bootstrapApplication(MovieListComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
})
.catch(err => console.error(err));

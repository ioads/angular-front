import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';  // Importando o AppComponent
import { routes } from './app/app.routes';  // Importando as rotas

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))  // Inicializando as rotas no RouterModule
  ]
})
.catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes), HttpClientModule)
  ]
})
.catch(err => console.error(err));

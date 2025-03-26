import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Importando RouterOutlet para o app.component.ts
import { CommonModule } from '@angular/common';  // Caso precise de diretivas como *ngFor

@Component({
  selector: 'app-root',  // Esse é o seletor que você usará no index.html
  standalone: true,  // Definindo como componente standalone
  imports: [CommonModule, RouterOutlet],  // Importando RouterOutlet para usar o <router-outlet>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-app';
}

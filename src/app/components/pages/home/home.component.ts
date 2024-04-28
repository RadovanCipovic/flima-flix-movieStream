import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Hotels - APP';
  description = 'Polaznici';
  polaznici = [
    'radovan',
    'marko',
    'sofija',
    'verica',
    'bojana',
    'ivan',
    'milovan',
    'petar',
    'jovan',
    'risto',
    'jovana',
    'vjerica',
  ];
  anuglarConcepts = ['components', 'services', 'pipes', 'models', 'directives'];
}

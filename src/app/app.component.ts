import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comBC';
  valor1: string = '10';
  valor2: string = '20';
  resultadoP!: number;
captaResultado(event: number) { this.resultadoP = event; }
}

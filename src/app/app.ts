import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Converter } from './converter/converter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Converter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Temperature-Converter';
}

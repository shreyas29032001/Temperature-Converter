import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './converter.html',
  styleUrl: './converter.css',
})
export class Converter {
  celsius: number | null = null;
  fahrenheit: number | null = null;

  convertToFahrenheit() {
    if (this.celsius !== null) {
      this.fahrenheit = parseFloat(((this.celsius * 9 / 5) + 32).toFixed(2));
    }
  }

  convertToCelsius() {
    if (this.fahrenheit !== null) {
      this.celsius = parseFloat(((this.fahrenheit - 32) * 5 / 9).toFixed(2));
    }
  }

 
}

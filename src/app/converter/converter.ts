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

   celcius: any = '';
  fahrenheit: any = '';
  fToC: any = '';
  cToF: any = '';

  toFahrenheit(){
    if (this.celcius !== ''){
      this.cToF = ((this.celcius * (9/5)) + 32).toFixed(2);
    } else {
      this.cToF = '';
    }
  }

  toCelcius(){
    if (this.fahrenheit !== ''){
      this.fToC = ((this.fahrenheit - 32) * (5 / 9)).toFixed(2);
    } else {
      this.fToC = '';
    }
  }
 
}

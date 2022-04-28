import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CryptoDataService} from './services/crypto-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crypto';
  custom="Raman"
  constructor(private cryptoData:CryptoDataService) { 
    
   this.cryptoData.crypto().subscribe(data=>{
      console.log(data);

    });
  }
}

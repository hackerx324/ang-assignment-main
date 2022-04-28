import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptoDataService {

  constructor(private http:HttpClient) { }
  crypto()
  {
   return  this.http.get("https://api.coingecko.com/api/v3/coins/")

  }
}

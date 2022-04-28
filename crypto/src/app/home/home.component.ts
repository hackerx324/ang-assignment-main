import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CryptoDataService} from '../services/crypto-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  ngOnInit(): void {
    // this.http.get("https://api.coingecko.com/api/v3/coins/").subscribe(Response=>{
    //  console.log(Response)

    // })
  }

}

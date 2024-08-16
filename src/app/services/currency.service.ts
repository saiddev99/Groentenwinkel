import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  GetApiUSD(): Observable<any>
  {
      return this.http.get('https://open.er-api.com/v6/latest/EUR');
  }
  
}

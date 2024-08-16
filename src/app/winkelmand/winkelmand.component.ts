import { Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Winkelmand } from '../models/winkelmand.model';
import { CurrencyService } from '../services/currency.service';
import { WinkelServiceService } from '../services/winkel-service.service';
import { WinkelmandServiceService } from '../services/winkelmand-service.service';

@Component({
  selector: 'winkelmand',
  templateUrl: './winkelmand.component.html',
  styleUrl: './winkelmand.component.css'
})
export class WinkelmandComponent implements OnInit{

constructor(private currencyService: CurrencyService, private winkelmandService: WinkelmandServiceService){}

data$: Observable<Winkelmand[]>;

@Input() winkelmandjes$: Observable<Winkelmand[]>
@Input() besteld: boolean;

ngOnInit() 
{
  this.currencyService.GetApiUSD().subscribe((x:any) => this.EurToUsd = x.rates['USD']);
}

EurToUsd: number;
isConverted = false;
currentCurreny = 'EUR '
currency = 'USD';

convertCurrency()
{
  const _this = this;
  if(this.isConverted === false)
  {
    this.winkelmandjes$.subscribe(function(x){
      x.map(function(y)
      {
          y.groente.prijs *= _this.EurToUsd
      })
    });
    this.currency = 'EUR';
    this.currentCurreny = 'USD '
    this.isConverted = true;
  }
  else
  {
    this.winkelmandjes$.subscribe(function(x){
      x.map(function(y)
      {
          y.groente.prijs /= _this.EurToUsd
      })
    });
    this.currency = 'USD';
    this.currentCurreny = 'EUR '
    this.isConverted = false;
  }
}

GetTotalPrice(): number
{
  return this.winkelmandService.GetTotalPrice()
}
}





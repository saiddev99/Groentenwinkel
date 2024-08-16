import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Winkelmand } from '../models/winkelmand.model';

@Injectable({
  providedIn: 'root'
})
export class WinkelmandServiceService {

  winkelmandjes: Winkelmand[] = []

  constructor() { }

  SetWinkelMand(winkelmand: Winkelmand, aantal: number)
  {
    if(!(this.winkelmandjes.find(x => x.winkel === winkelmand.winkel && x.groente.naam === winkelmand.groente.naam)))
    {
      this.winkelmandjes.push(winkelmand);
    }
    else
    {
      this.winkelmandjes[this.winkelmandjes.findIndex(x => x.winkel === winkelmand.winkel && x.groente.naam === winkelmand.groente.naam)].aantal += aantal
    }
  }

  GetWinkelMandjes() : Observable<Winkelmand[]>
  {
      return of(this.winkelmandjes)
  }

  GetTotalPrice(): number
  {
    return this.winkelmandjes.map(x => x.groente.prijs * x.aantal).reduce((x, y) => x + y, 0)
  } 
}

import { Injectable } from '@angular/core';
import { Winkel } from '../models/winkel.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WinkelServiceService {
  winkels = [
    {naam:"De fruitmand",adres:"steenstraat 34", post:8000, gemeente:"Brugge",tel:"050342218", manager:"Francine Lapoule"}, 

    {naam:"Jos & Anneke",adres:"visserijstraat 1", post:8400,gemeente:"Oostende",tel:"059463689",manager:"Jos Leman"},

    {naam:"Groene vingers",adres:"hoogstraat 108", post:9000,gemeente:"Gent",tel:"091342218", manager: ""},

    {naam:"De buurtwinkel",adres:"die laene 22", post:2000,gemeente:"Antwerpen",tel:"0230342218",manager:"Bert Simoens"}
  ];

  constructor() { }

  public GetWinkels(): Observable<Winkel[]>
  {
      return of(this.winkels)
  }
}

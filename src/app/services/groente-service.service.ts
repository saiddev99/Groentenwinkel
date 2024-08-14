import { Injectable } from '@angular/core';
import { Groente } from '../models/groente.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroenteServiceService {

  groenten = [
    {naam: "aardappelen",prijs: 0.95,gewichtHoeveelheid: "kg"},
    {naam: "avocado",prijs: 2.69,gewichtHoeveelheid: "stuk"},
    {naam: "bloemkool",prijs: 1.93,gewichtHoeveelheid: "stuk"},
    {naam: "brocoli",prijs: 1.29,gewichtHoeveelheid: "stuk"},
    {naam: "champignons",prijs: 0.89,gewichtHoeveelheid: "250g"},
    {naam: "chinese kool",prijs: 1.59,gewichtHoeveelheid:"stuk"},
    {naam: "groene kool",prijs: 1.69,gewichtHoeveelheid: "stuk"},
    {naam: "knolselder",prijs: 1.29,gewichtHoeveelheid: "stuk"},
    {naam: "komkommer",prijs: 2.49,gewichtHoeveelheid: "stuk"},
    {naam: "kropsla",prijs: 1.69,gewichtHoeveelheid: "stuk"},
    {naam: "paprika",prijs: 0.89,gewichtHoeveelheid: "net"},
    {naam: "prei",prijs: 2.99,gewichtHoeveelheid: "bundel"},
    {naam: "princessenbonen",prijs: 1,gewichtHoeveelheid: "250g"},
    {naam: "rapen",prijs: 0.99,gewichtHoeveelheid: "bundel"},
    {naam: "rode kool",prijs: 1.39,gewichtHoeveelheid: "stuk"},
    {naam: "sla iceberg",prijs: 1.49,gewichtHoeveelheid: "stuk"},
    {naam: "spinazie vers",prijs: 1.89,gewichtHoeveelheid: "300g"},
    {naam: "sjalot",prijs: 0.99,gewichtHoeveelheid: "500g"},
    {naam: "spruiten",prijs: 1.86,gewichtHoeveelheid: "kg"},
    {naam: "trostomaat",prijs: 2.99,gewichtHoeveelheid: "500g"},
    {naam: "ui",prijs: 0.89,gewichtHoeveelheid: "kg"},
    {naam: "witloof 1ste keus",prijs: 1.49,gewichtHoeveelheid: "700g"},
    {naam: "wortelen",prijs: 2.59,gewichtHoeveelheid: "kg"},
    {naam: "courgetten",prijs: 1.5,gewichtHoeveelheid: "stuk"}
  ]

  constructor() { }

  public GetGroenten(): Observable<Groente[]>
  {
      return of(this.groenten)
  }
}

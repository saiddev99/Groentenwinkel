import { Component, OnInit } from '@angular/core';
import { WinkelServiceService } from '../services/winkel-service.service';
import { Observable } from 'rxjs';
import { Winkel } from '../models/winkel.model';
import { Groente } from '../models/groente.model';
import { GroenteServiceService } from '../services/groente-service.service';

@Component({
  selector: 'bestelling-formulier',
  templateUrl: './bestelling-formulier.component.html',
  styleUrl: './bestelling-formulier.component.css'
})
export class BestellingFormulierComponent implements OnInit {

winkels$:  Observable<Winkel[]>
groenten$: Observable<Groente[]>

constructor (private winkelService: WinkelServiceService, private groentenService: GroenteServiceService){}


ngOnInit() {
  this.winkels$ = this.winkelService.GetWinkels();
  this.groenten$ = this.groentenService.GetGroenten();

  console.log(this.groenten$)
}

}

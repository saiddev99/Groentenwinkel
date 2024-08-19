import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { WinkelServiceService } from '../services/winkel-service.service';
import { Observable} from 'rxjs';
import { Winkel } from '../models/winkel.model';
import { Groente } from '../models/groente.model';
import { GroenteServiceService } from '../services/groente-service.service';
import { WinkelmandServiceService } from '../services/winkelmand-service.service';
import { Winkelmand } from '../models/winkelmand.model';

@Component({
  selector: 'bestelling-formulier',
  templateUrl: './bestelling-formulier.component.html',
  styleUrl: './bestelling-formulier.component.css'
})
export class BestellingFormulierComponent implements OnInit {

winkels$:  Observable<Winkel[]>
groenten$: Observable<Groente[]>

winkel: string
groente: Groente
aantal: number
regex: string = ''

constructor (private winkelService: WinkelServiceService, private groentenService: GroenteServiceService, 
  private winkelmandService: WinkelmandServiceService,
  private cd:ChangeDetectorRef){}


ngOnInit() {
  this.winkels$ = this.winkelService.GetWinkels();
  this.groenten$ = this.groentenService.GetGroenten();
}

setRegex(value: Groente)
{
  if(!(value.gewichtHoeveelheid.includes('kg') || value.gewichtHoeveelheid.includes('g')))
  {
    this.regex = '[0-9]*';
  }
  else
  {
    this.regex = '';
  } 
  this.cd.detectChanges();
}


winkelmandjes$: Observable<Winkelmand[]>;
besteld = false;

onSubmit(value: Winkelmand)
{
  this.besteld = true;
  this.winkelmandService.SetWinkelMand(value, this.aantal);
  this.winkelmandjes$ = this.winkelmandService.GetWinkelMandjes()
}

}

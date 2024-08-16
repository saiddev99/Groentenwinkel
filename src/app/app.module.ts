import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestellingFormulierComponent } from './bestelling-formulier/bestelling-formulier.component';
import { WinkelServiceService } from './services/winkel-service.service';
import { GroenteServiceService } from './services/groente-service.service';
import { WinkelmandComponent } from './winkelmand/winkelmand.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BestellingFormulierComponent,
    WinkelmandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [WinkelServiceService, GroenteServiceService, WinkelServiceService, provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }

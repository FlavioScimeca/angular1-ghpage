import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UtenteComponent } from './utente/utente.component';
import { ServeComponent } from './serve/serve.component';

@NgModule({
  declarations: [AppComponent, UtenteComponent, ServeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

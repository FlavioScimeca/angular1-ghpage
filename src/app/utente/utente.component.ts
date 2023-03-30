import { Component } from '@angular/core';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css'],
})
export class UtenteComponent {
  utenti: object[];
  constructor() {
    this.utenti = [
      {
        nome: 'Anna',
        cognome: 'rossi',
        eta: 28,
        citta: 'Roma',
        pizza: 'Mortadellina',
        status: this.setStatus(),
      },
      {
        nome: 'Flavio',
        cognome: 'verdi',
        eta: 20,
        citta: 'Agrigento',
        pizza: 'Mortadellina',
        status: this.setStatus(),
      },
      {
        nome: 'Paolo',
        cognome: 'Torinesi',
        eta: 31,
        citta: 'Torino',
        pizza: 'Mortadellina',
        status: this.setStatus(),
      },
    ];
  }

  setStatus(): boolean {
    if (Math.random() < 0.5) {
      return true;
    } else {
      return false;
    }
  }
}

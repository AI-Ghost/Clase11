import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  titulo:string = "Contactos"

  medios:any[] = [
    { "texto":"En Twitter" },
    { "texto":"En Facebook" },
    { "texto":"Por correo electronico" }
  ]
}

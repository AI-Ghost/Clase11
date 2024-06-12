import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './shared/footer/footer.component';
import { LogoComponent } from './shared/logo/logo.component';
import { MenuComponent } from './shared/menu/menu.component';
import { InicioComponent } from './shared/inicio/inicio.component';
import { NosotrosComponent } from './shared/nosotros/nosotros.component';
import { ServiciosComponent } from './shared/servicios/servicios.component';
import { ContactosComponent } from './shared/contactos/contactos.component';
import { RecursosService } from './servicios/recursos.service';
import { Tabla } from './interfaz/tabla';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,LogoComponent,MenuComponent,RouterLink,RouterLinkActive,HttpClientModule,InicioComponent,NosotrosComponent,ServiciosComponent,ContactosComponent],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tallerAng';
  tablas: Tabla[] = [];
  constructor(private recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.tablas = respuesta as Array<Tabla>
    })
  }
}
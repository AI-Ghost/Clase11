import { Routes } from '@angular/router';
import { InicioComponent } from './shared/inicio/inicio.component';
import { NosotrosComponent } from './shared/nosotros/nosotros.component';
import { ServiciosComponent } from './shared/servicios/servicios.component';
import { ContactosComponent } from './shared/contactos/contactos.component';


export const routes: Routes = [
    { path: 'inicio-component', component: InicioComponent },
    { path: 'nosotros-component', component: NosotrosComponent },
    { path: 'servicios-component', component: ServiciosComponent },
    { path: 'contactos-component', component: ContactosComponent },
];

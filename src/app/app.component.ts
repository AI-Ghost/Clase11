import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { LogoComponent } from './shared/logo/logo.component';
import { MenuComponent } from './shared/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,LogoComponent,MenuComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tallerAng';
}

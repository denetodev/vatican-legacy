import { Component } from '@angular/core';
import { HomeComponent } from "./views/home/home.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pope-francis-landing-page';
}

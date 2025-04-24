import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CtaComponent } from '../../components/cta/cta.component';
import { LegacyComponent } from '../../components/legacy/legacy.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { HeroComponent } from "../../components/hero/hero.component";
import { AboutComponent } from "../../components/about/about.component";
import { QuotesComponent } from "../../components/quotes/quotes.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, TimelineComponent, LegacyComponent, CtaComponent, HeroComponent, AboutComponent, QuotesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

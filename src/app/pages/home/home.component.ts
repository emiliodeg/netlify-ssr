import { Component } from '@angular/core';
import { FeaturesComponent } from '../../components/features/features.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [FeaturesComponent, PricingComponent, FaqComponent, HeroComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}

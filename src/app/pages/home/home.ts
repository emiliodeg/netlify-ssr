import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Features } from '../../components/features/features';
import { Pricing } from '../../components/pricing/pricing';
import { Faq } from '../../components/faq/faq';
import { Trusted } from '../../components/trusted/trusted';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    Trusted,
    Features,
    Pricing,
    Faq
  ],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home { }

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Features } from '../../components/features/features';
import { Pricing } from '../../components/pricing/pricing';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Footer } from '../../components/footer/footer';
import { Faq } from '../../components/faq/faq';
import { Trusted } from '../../components/trusted/trusted';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Hero,
    Trusted,
    Features,
    Pricing,
    Testimonials,
    Footer,
    Faq
  ],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {}

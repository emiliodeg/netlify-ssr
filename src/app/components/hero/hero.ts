import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Hero {} 
import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [JsonPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export default class Home {
  #route = inject(ActivatedRoute);

  protected data =  this.#route.snapshot.data['data'];
}

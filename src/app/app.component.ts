import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NasaService} from "./services/nasa.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myFirstWebService';

  imgOfTheDay: string = '';

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(data => {
      this.imgOfTheDay = data.url;
    });
  }
}

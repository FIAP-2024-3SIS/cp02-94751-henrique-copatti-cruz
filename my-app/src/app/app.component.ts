import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { AnimalPageComponent } from './animal-page/animal-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimalPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}

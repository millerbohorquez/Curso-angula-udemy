import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [RopaService]
})
export class HomeComponent {
  public title = 'Home Component';

  constructor(
    private _ropaService: RopaService
  ) {}

  ngOnInit() {
    console.log(this._ropaService.prueba());
  }
}

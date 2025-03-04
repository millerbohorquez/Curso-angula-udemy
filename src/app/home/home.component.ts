import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [RopaService]
})
export class HomeComponent implements OnInit {
  public title = 'Home Component';
  public listado_ropa: Array<string> = []; 
  public prenda_a_guardar: string = '';

  constructor(
    private _ropaService: RopaService
  ) {}

  ngOnInit() {
    this.listado_ropa = this._ropaService.getRopa(); 
    console.log(this.listado_ropa);
  }

  guardarPrenda() {
      this.listado_ropa = this._ropaService.addRopa(this.prenda_a_guardar);
      this.prenda_a_guardar = ''; 
  }

  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
  }
}
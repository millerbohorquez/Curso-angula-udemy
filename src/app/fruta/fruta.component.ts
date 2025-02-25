import { Component } from '@angular/core';

@Component({
  selector: 'app-fruta',
  standalone: false,
  templateUrl: './fruta.component.html',
  styleUrl: './fruta.component.css'
})
export class FrutaComponent {
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

  constructor(){
    
  }
}

import { Component } from '@angular/core';
import { empleado } from './empleado';

@Component({
  selector: 'app-empledo',
  standalone: false,
  templateUrl: './empledo.component.html',
  styleUrl: './empledo.component.css'
})
export class EmpledoComponent {
  public titulo = 'Componente empleados';
  public empleado!: empleado;
  public trabajadores: Array<empleado>;
  public trabajadorExterno:boolean;
  public color:string;
  public colorSeleccionado:string;

  constructor(){
    this.empleado = new empleado('Manolo', 45, 'admin', true);
    this.trabajadores = [
      new empleado('Juan', 45, 'Cocinero', true),
      new empleado('Pedro', 35, 'Cocinero', true),
      new empleado('Maria', 25, 'Cocinero', true),
      new empleado('Laura', 35, 'Cocinero', true)
    ];

    this.trabajadorExterno = true;
    this.color = 'red';
    this.colorSeleccionado = '#ccc';
  }

  cambiarExterno(valor: boolean): void {
    this.trabajadorExterno = valor;
  }
}

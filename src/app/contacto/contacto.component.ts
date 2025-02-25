import { Component } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  public title = 'Contacto Component';
  public parametro: string | undefined;

  constructor(private _route: ActivatedRoute, private _router: Router){

  }
  
  ngOnInit(){
    this._route.params.forEach((params:Params) => {
      this.parametro = params['page'];
    });
  }

  redirigir(){
    this._router.navigate(['/contacto','XD']);
  }
  redirigirDos(){
    this._router.navigate(['/home']);
  }
}

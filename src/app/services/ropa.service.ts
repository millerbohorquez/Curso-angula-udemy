import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopaService {
  public nombre_prenda = 'Pantalones vaqueros';
  prueba(){
    return this.nombre_prenda;
  }
}

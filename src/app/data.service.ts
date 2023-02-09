import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';



@Injectable()
export class DataService{
    constructor(
      private httpClient: HttpClient
    ){}

  // tslint:disable-next-line:typedef
    cargarPersonas(){
        return this.httpClient.get('https://listado-personas-d5f5c-default-rtdb.firebaseio.com/datos.json');
    }
    // guardar Personas
  // tslint:disable-next-line:typedef
    guardarPersonas(personas: Persona[]){
        this.httpClient.put('https://listado-personas-d5f5c-default-rtdb.firebaseio.com/datos.json', personas)
        .subscribe(
            response => console.log('resultado guardar personas' + response),
            error => console.log('Error al guardar personas:' + error)
        );
    }
}

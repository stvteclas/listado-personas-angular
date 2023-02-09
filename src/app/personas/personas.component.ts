import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(
    private personasService: PersonasService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    this.personasService.obtenerPersonas().subscribe((personas: Persona[]) => {
      this.personas = personas;
      this.personasService.setPersonas(this.personas);
    });
  }

  // tslint:disable-next-line:typedef
  agregar() {
    this.router.navigate(['personas/agregar']);
  }
}

import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from './persona.service';

import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']

})
export class InicioSesionComponent implements OnInit {
  
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
 
}
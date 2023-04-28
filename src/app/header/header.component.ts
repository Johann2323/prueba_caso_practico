import { Component, OnInit, DoCheck, Input } from "@angular/core";

import { InicioSesionComponent } from "../inicio-sesion/inicio-sesion.component";
import { Router } from '@angular/router';
import { NotificacionesService } from "../NotificacionesService";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{

    

    constructor(private router1: Router,private notificacionesService: NotificacionesService) { }
    get nuevosRegistros() {
        
        return this.notificacionesService.nuevosRegistros;
        

        
      }

    public ocultar(){
        this.notificacionesService.nuevosRegistros=0;

    }
    


    ngOnInit(): void {
       
    }
    


}




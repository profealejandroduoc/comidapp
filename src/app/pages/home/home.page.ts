import { Component } from '@angular/core';
import { ServicioComidaService } from '../../services/servicio-comida.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private servicioComida:ServicioComidaService) {}

}

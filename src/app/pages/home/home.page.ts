import { Component, OnInit } from '@angular/core';
import { ServicioComidaService } from '../../services/servicio-comida.service';
import { Categorias,Categoria } from 'src/app/interfaces/comidas'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  categorias:Categoria[]=[];
  constructor(private servicioComida:ServicioComidaService) {}


  ngOnInit()
  {
    this.servicioComida.getCategorias().subscribe(datos=>{
      //console.log(datos.categories);
      this.categorias.push(...datos.categories);
      console.log(this.categorias);
    });


    console.log("hola");
    
  }
}

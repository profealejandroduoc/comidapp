import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Categorias, Categoria } from '../interfaces/comidas';

@Injectable({
  providedIn: 'root'
})
export class ServicioComidaService {

  constructor(private httpclient:HttpClient) { }

  getCategorias()
  {
    return this.httpclient.get<Categorias>(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  }

}

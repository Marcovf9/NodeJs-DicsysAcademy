import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/categorias`);
  }

  getProductos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/productos`);
  }

  getProductosPorCategoria(idCategoria: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/productos/${idCategoria}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit {
  productos: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.http.get<any[]>('/productos').subscribe((data) => {
      this.productos = data;
    });
  }

  nuevoProducto(): void {
    this.router.navigate(['/productos/nuevo']);
  }

  editarProducto(producto: any): void {
    this.router.navigate(['/productos/editar', producto.id]);
  }

  eliminarProducto(id: number): void {
    if (confirm('Eliminar producto?')) {
      this.http.delete(`/api/productos/${id}`).subscribe(() => {
        alert('Producto eliminado');
        this.cargarProductos();
      });
    }
  }
}

import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent implements OnChanges {
  @Input() categoriaId!: number;
  productos: any[] = [];

  constructor(private servicioService: ServicioService) {}

  ngOnChanges(): void {
    if (this.categoriaId) {
      this.obtenerProductosPorCategoria();
    }
  }

  obtenerProductosPorCategoria(): void {
    this.servicioService.getProductosPorCategoria(this.categoriaId).subscribe((data: any[]) => {
      this.productos = data;
    });
  }
}

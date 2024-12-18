import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})

export class CategoriasComponent implements OnInit {
  categorias: any[] = [];
  @Output() categoriaSeleccionada = new EventEmitter<number>();

  constructor(private servicioService: ServicioService) {}

  ngOnInit(): void {
    this.traerCategorias();
  }

  traerCategorias(): void {
    this.servicioService.getCategorias().subscribe((data: any[]) => {
      this.categorias = data;
    });
  }

  seleccionarCategoria(id: number): void {
    this.categoriaSeleccionada.emit(id);
  }  
}
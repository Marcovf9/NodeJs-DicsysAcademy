import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosComponent } from './productos/productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, CategoriasComponent, ProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontNodeJsDicsys';
  categoriaSeleccionada: number | null = null;

  mostrarProductos(idCategoria: number): void {
    this.categoriaSeleccionada = idCategoria;
  }
}


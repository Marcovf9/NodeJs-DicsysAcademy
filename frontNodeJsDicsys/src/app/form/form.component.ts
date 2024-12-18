import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  producto: any = { nombre: '', precio: 0, id_categoria: null };
  categorias: any[] = [];
  esEditar: boolean = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarCategorias();
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.esEditar = true;
      this.http.get(`http://localhost:3000/api/productos/${id}`).subscribe((data) => {
        this.producto = data;
      });
    }
  }

  cargarCategorias(): void {
    this.http.get('http://localhost:3000/api/categorias').subscribe(
      (data) => {
        console.log('Datos recibidos:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );    
  }

  guardarProducto(): void {
    const request = this.esEditar
      ? this.http.put(`/api/productos/${this.producto.id}`, this.producto)
      : this.http.post('/api/productos', this.producto);

    request.subscribe(() => {
      alert('Producto guardado exitosamente');
      this.router.navigate(['/productos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/productos']);
  }
}

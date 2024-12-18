import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { FormComponent } from './form/form.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
  
export const routes: Routes = [
  { path: 'productos', component: CrudComponent },
  { path: 'productos/nuevo', component: FormComponent },
  { path: 'productos/editar/:id', component: FormComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' }
];
  
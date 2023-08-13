import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './angular-product-management/product-list/product-list.component';
import {ProductCreateComponent} from './angular-product-management/product-create/product-create.component';
import {ProductDeleteComponent} from './angular-product-management/product-delete/product-delete.component';
import {ProductEditComponent} from './angular-product-management/product-edit/product-edit.component';


const routes: Routes = [
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/delete', component: ProductDeleteComponent},
  {path: 'product/edit', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

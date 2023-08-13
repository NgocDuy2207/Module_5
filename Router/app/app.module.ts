import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionayPageComponentComponent } from './Dictionary/dictionay-page-component/dictionay-page-component.component';
import { DictionaryDetailComponent } from './Dictionary/dictionary-detail/dictionary-detail.component';
import { AngularProductManagementComponent } from './angular-product-management/angular-product-management.component';
import { ProductListComponent } from './angular-product-management/product-list/product-list.component';
import { ProductCreateComponent } from './angular-product-management/product-create/product-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductEditComponent } from './angular-product-management/product-edit/product-edit.component';
import { ProductDeleteComponent } from './angular-product-management/product-delete/product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionayPageComponentComponent,
    DictionaryDetailComponent,
    AngularProductManagementComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

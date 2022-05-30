import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CreateCategoryComponent } from './pages/create-category/create-category.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';


@NgModule({
  declarations: [
    CreateCategoryComponent,
    EditCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }

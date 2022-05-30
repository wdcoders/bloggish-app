import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoryComponent } from './pages/create-category/create-category.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';

const routes: Routes = [
  { path: '', component: ListCategoryComponent },
  { path: 'create', component: CreateCategoryComponent },
  { path: 'edit', component: EditCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}

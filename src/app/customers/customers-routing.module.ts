import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: ListPageComponent },
  { path: ':id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { DetailsComponent } from './details/details.component';
import { ListPageComponent } from './list-page/list-page.component';

@NgModule({
  declarations: [ListPageComponent, DetailsComponent],
  imports: [CommonModule, SharedModule, CustomersRoutingModule]
})
export class CustomersModule {}

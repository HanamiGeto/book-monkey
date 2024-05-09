import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form/book-form.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { LocalDateValueAccessor } from 'angular-date-value-accessor';

@NgModule({
  declarations: [BookFormComponent, BookCreateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    LocalDateValueAccessor,
  ],
})
export class AdminModule {}

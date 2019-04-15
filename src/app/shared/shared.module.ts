import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginitationComponent } from './pagination/pagination.component';

    /**
     * shared module for paginitaion purpose
     * @SharedModule
     */

@NgModule({
  declarations: [
    PaginitationComponent
  ],
  imports: [    
    CommonModule
  ],
  exports: [PaginitationComponent]
})
export class SharedModule { }

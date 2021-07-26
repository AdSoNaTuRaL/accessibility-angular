import { FocusBackModule } from './../../directives/focus-back/focus-back.module';
import { ModalService } from './modal.service';
import { ModalComponent } from './modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusTrapModule } from '../../directives/focus-trap/focus-trap.module';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, FocusTrapModule, FocusBackModule],
  exports: [ModalComponent],
  providers: [ModalService],
})
export class ModalModule {}

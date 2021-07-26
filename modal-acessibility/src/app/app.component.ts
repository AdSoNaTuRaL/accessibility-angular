import {
  ModalService,
  ModalRef,
} from './shared/components/modal/modal.service';
import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('modal') modalTemplateRef: TemplateRef<any>;

  firstName = 'Adson';
  modalRef: ModalRef;

  constructor(private modalService: ModalService) {}

  show(): void {
    this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User details',
    });
  }
}

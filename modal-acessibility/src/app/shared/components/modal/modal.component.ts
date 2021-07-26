import { fade } from './../../animations/fade';
import { ModalConfig, ModalRef } from './modal';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade],
})
export class ModalComponent {
  @HostBinding('@fade') fade = true;
  config: ModalConfig;
  modalRef: ModalRef;
}

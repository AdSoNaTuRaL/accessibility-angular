import { ModalService } from './shared/components/modal/modal.service';
import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { ModalRef } from './shared/components/modal/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('modal') modalTemplateRef: TemplateRef<any>;

  firstName = 'Adson';
  modalRef: ModalRef;
  form: FormGroup;

  constructor(
    private modalService: ModalService,
    private formGroup: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formGroup.group({
      firstName: ['Adson', [Validators.required]],
      surname: ['', [Validators.required]],
      age: ['', [Validators.required]],
    });
  }

  show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User details',
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.modalRef.close();
  }
}

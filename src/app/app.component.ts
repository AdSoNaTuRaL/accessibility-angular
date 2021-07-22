import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'acessibility';
  public form: FormGroup = null;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      yesNoAnswer: [
        {
          value: null,
          disabled: false,
        },
      ],
    });
  }

  public submit(): void {
    console.log(this.form.value);
  }
}

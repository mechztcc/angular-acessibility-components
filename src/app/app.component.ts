import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'acessibility-components';
  value: string;

  id: string = null;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
    this.id = uuid.v1();
  }

  initForm() {
    this.form = this.fb.group({
      content: ['no'],
    });
  }

  submit() {
    console.log(this.form.value);
  }
}

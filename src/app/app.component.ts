import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UniqueIdService } from './services/unique-id.service';

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

  constructor(private fb: FormBuilder, private generateId: UniqueIdService) {
    this.initForm();
    this.id = this.generateId.generateUniqueIdWithPrefix('label');
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

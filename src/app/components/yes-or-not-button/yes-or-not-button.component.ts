import {
  Component,
  EventEmitter,
  forwardRef,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-yes-or-not-button',
  templateUrl: './yes-or-not-button.component.html',
  styleUrls: ['./yes-or-not-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesOrNotButtonComponent),
    },
  ],
})
export class YesOrNotButtonComponent implements OnInit, ControlValueAccessor {
  @Output() valueChange = new EventEmitter<string>();
  value: string = 'no';
  public options = OptionsButton;
  public onChange = (value: string) => {};
  public onTouched = () => {};

  constructor() {}

  ngOnInit(): void {}


  writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }


  activate(value: string) {
    this.value = value;
    this.valueChange.emit(this.value);
    this.writeValue(this.value)
  }
}

enum OptionsButton {
  YES = 'yes',
  NO = 'no',
}

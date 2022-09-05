import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDisabledControll]',
})
export class DisabledControllDirective implements OnChanges {
  @Input() appDisabledControll = false;

  constructor(private ngControl: NgControl) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appDisabledControll']) {
      const action = this.appDisabledControll ? 'disable' : 'enable';
      this.ngControl.control[action]();
    }
  }
}

import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';
import { KeybordManagerItemDirective } from './keybord-manager-item.directive';

@Directive({
  selector: '[appKeybordManager]',
})
export class KeybordManagerDirective {
  constructor() {}

  @ContentChildren(KeybordManagerItemDirective)
  public items: QueryList<KeybordManagerItemDirective>;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;

      case 'ArrowDown':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;

      case 'ArrowLeft':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowRight':
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;

      default:
        break;
    }
  }

  public moveFocus(direction: ArrowDirection): KeybordManagerItemDirective {
    const items = this.items.toArray();
    const currentSelectedIndex = items.findIndex((item) => item.isFocused());
    const targetElementFocus = items[currentSelectedIndex + direction];

    if (targetElementFocus) {
      return targetElementFocus;
    }

    return direction === ArrowDirection.LEFT
      ? items[items.length - 1]
      : items[0];
  }
}

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1,
}

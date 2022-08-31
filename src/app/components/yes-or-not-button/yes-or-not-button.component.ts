import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yes-or-not-button',
  templateUrl: './yes-or-not-button.component.html',
  styleUrls: ['./yes-or-not-button.component.scss'],
})
export class YesOrNotButtonComponent implements OnInit {
  value: string = 'no';
  public options = OptionsButton;

  constructor() {}

  ngOnInit(): void {}

  activate(value: string) {
    this.value = value;
  }
}

enum OptionsButton {
  YES = 'yes',
  NO = 'no',
}

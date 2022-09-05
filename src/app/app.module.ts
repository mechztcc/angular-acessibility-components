import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YesOrNotButtonComponent } from './components/yes-or-not-button/yes-or-not-button.component';
import { KeybordManagerItemDirective } from './directives/keyboard-manager/keybord-manager-item.directive';
import { KeybordManagerDirective } from './directives/keyboard-manager/keybord-manager.directive';

@NgModule({
  declarations: [
    AppComponent,
    YesOrNotButtonComponent,
    KeybordManagerDirective,
    KeybordManagerItemDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

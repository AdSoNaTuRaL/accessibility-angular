import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';
import { DisableControlModule } from './shared/directives/disable-control/disabled-control.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    YesNoButtonGroupModule,
    ReactiveFormsModule,
    FormsModule,
    DisableControlModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

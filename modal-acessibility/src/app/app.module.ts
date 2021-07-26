import { ModalModule } from './shared/components/modal/modal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

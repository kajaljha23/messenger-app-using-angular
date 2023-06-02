import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessengerComponent } from './messenger/messenger.component';
import { MessengerDataService } from './messenger-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MessengerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MessengerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

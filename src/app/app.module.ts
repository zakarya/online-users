import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OnlineUsersComponent } from './online-users/online-users.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlineUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    OnlineUsersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { LogService } from './log.service';
import { AdminService } from './admin.service';
import { ItemComponent } from './item/item.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // { provide: UserService, useClass: UserService, deps: [LogService] },
    UserService,
    { provide: UserService, useFactory: (log) => {
      // if(log.preview)
      return new UserService(log);
    }, deps: [LogService]},
    { provide: UserService, useExisting: AdminService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { GreenComponent } from './green/green.component';
import { GrayComponent } from './gray/gray.component';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';
import { PinkComponent } from './pink/pink.component';
import { OrangeComponent } from './orange/orange.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    GreenComponent,
    GrayComponent,
    BlueComponent,
    RedComponent,
    PinkComponent,
    OrangeComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

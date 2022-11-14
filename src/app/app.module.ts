import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { FirstChildComponentComponent } from './firstcomponent/first-child-component/first-child-component.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { ThirdcomponentComponent } from './thirdcomponent/thirdcomponent.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    FirstChildComponentComponent,
    SecondcomponentComponent,
    ThirdcomponentComponent,
    FormsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

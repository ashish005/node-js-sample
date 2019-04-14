import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {routing} from "./app.routing";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "@app-auth/login/login.component";
import {RegisterComponent} from "@app-auth/register/register.component";
import {CORE_DIRECTIVES, CORE_SERVICES} from "@app-core/index";

// used to create fake backend


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CORE_DIRECTIVES
  ],
  providers: [
    CORE_SERVICES
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

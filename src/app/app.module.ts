import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from "./dbz/dbz.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CounterModule,
        HeroesModule,
        DbzModule
    ]
})
export class AppModule { }

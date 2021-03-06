import { NgModule }                          from '@angular/core';
import { BrowserModule }                     from '@angular/platform-browser';
import { HttpModule }                        from '@angular/http';

import { AppComponent }                      from './components/app.component';

@NgModule ({
    imports:      [ BrowserModule, HttpModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ ]
})
export class AppModule { }
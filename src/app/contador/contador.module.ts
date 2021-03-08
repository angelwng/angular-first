import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { HeroesModule } from '../heroes/heroe/heroes.module';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        AppComponent
    ],
    imports:[
        BrowserModule,
        HeroesModule,
        ContadorComponent
    ],

    providers:[],
    bootstrap:[AppComponent]

})

export class AppModule{}
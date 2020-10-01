import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';



// components
import { AppHeader } from './header/header.component';
import { HeaderModule } from './header/header.module';
// games component
import { DIG } from './games/doubleimage-game/doubleimg.component'
import { DWG } from './games/doubleword-game/doubleword.component';
import { IMIG } from './games/imagemanyimg-game/imageplusimgs.component';
import { IWG } from './games/imageword-game/imageword.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    DIG,
    DWG,
    IMIG,
    IWG
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule { }

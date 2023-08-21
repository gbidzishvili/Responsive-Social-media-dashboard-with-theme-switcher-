import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './cards/cards.component';
import { OverviewComponent } from './overview/overview.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LayoutComponent, CardsComponent, OverviewComponent, CheckboxComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatSlideToggleModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatSlideToggleModule],
})
export class AppModule {}

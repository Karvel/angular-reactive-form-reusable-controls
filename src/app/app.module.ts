import { BrowserModule }       from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule }            from '@angular/core';

import { AppComponent }        from './app.component';
import {
	AppRoutingModule,
	routedComponents as mainAppRoutedComponents,
  }                            from './app-routing.module';
import { ControlsModule }      from './core/controls/controls.module';
import { CoreModule }          from './core/core.module';

@NgModule({
	declarations: [
		AppComponent,
		mainAppRoutedComponents,
	],
	imports: [
		BrowserModule,
		ControlsModule,
		CoreModule,
		ReactiveFormsModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

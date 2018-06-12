import { BrowserModule }           from '@angular/platform-browser';
import { ReactiveFormsModule }     from '@angular/forms';
import { NgModule }                from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }            from './app.component';
import {
	AppRoutingModule,
	routedComponents as mainAppRoutedComponents,
}                                  from './app-routing.module';
import { ControlsModule }          from './core/controls/controls.module';
import { CoreModule }              from './core/core.module';
import { MaterialModule }          from './core/imports/material.module';

@NgModule({
	declarations: [
		AppComponent,
		mainAppRoutedComponents,
	],
	imports: [
		BrowserModule,
		ControlsModule,
		CoreModule,
		MaterialModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }

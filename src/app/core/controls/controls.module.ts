import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';

import { RequiredInputComponent } from './required-input/required-input.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		RequiredInputComponent,
	],
	exports: [
		RequiredInputComponent,
	],
})
export class ControlsModule { }

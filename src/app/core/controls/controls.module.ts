import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';

import { RequiredInputComponent } from './required-input/required-input.component';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
	],
	declarations: [
		RequiredInputComponent,
	],
	exports: [
		RequiredInputComponent,
	],
})
export class ControlsModule { }

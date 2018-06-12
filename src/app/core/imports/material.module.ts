import { NgModule } from '@angular/core';

import {
	MatButtonModule,
	MatCardModule,
	MatInputModule,
} from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatCardModule,
		MatInputModule,
	],
	exports: [
		MatButtonModule,
		MatCardModule,
		MatInputModule,
	],
})
export class MaterialModule { }

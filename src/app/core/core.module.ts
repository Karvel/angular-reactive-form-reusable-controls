import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule }                 from '@angular/common';

import { FormService }                  from './services/form.service';
import { throwIfAlreadyLoaded }         from './guards/module-import-guard.service';

@NgModule({
	imports: [
		CommonModule,
	],
	providers: [
		FormService,
	],
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		throwIfAlreadyLoaded(parentModule, 'CoreModule');
	}
}

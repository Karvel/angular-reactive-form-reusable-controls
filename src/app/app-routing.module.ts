import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './features/home/home.component';
import { NotFoundComponent }    from './features/not-found/not-found.component';

const appRoutes: Routes = [
	{
		path       : '',
		redirectTo : '/home',
		pathMatch  : 'full',
	},
	{
		path      : 'home',
		component : HomeComponent,
	},
	{
		path      : '**',
		component : NotFoundComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes),
	],
	exports: [
		RouterModule,
	]
})
export class AppRoutingModule { }

export const routedComponents = [
	HomeComponent,
	NotFoundComponent,
];

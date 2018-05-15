import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }                from '@angular/forms';

@Component({
	selector    : 'app-required-input',
	templateUrl : './required-input.component.html',
	styleUrls   : ['./required-input.component.scss']
})
export class RequiredInputComponent {
	@Input() public form: FormGroup;
	@Input() public formControlTitle: string;
	@Input() public placeholder: string = 'This field';

	constructor() { }
}

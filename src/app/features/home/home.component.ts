import { Component }              from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { RequiredValidation }     from '../../core/validation/required-validation';
import { User }                   from '../../core/models/user';

@Component({
	selector    : 'app-home',
	templateUrl : './home.component.html',
	styleUrls   : ['./home.component.scss'],
})
export class HomeComponent {
	public tutorialForm: FormGroup;
	public user: User;

	constructor(
		private formBuilder: FormBuilder,
	) {
		this.tutorialForm = this.formBuilder.group({
			name: '',
			id: { value: 123, disabled: true },
			password: ['', [RequiredValidation.required('Password')]],
		});
	}

	public submitForm(): void {
		console.log('submitForm', this.tutorialForm);
		this.user = this.tutorialForm.value;
	}
}

import { Component, OnInit }      from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector    : 'app-home',
	templateUrl : './home.component.html',
	styleUrls   : ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public tutorialForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
	) {
		this.tutorialForm = this.formBuilder.group({
			name: '',
		});
	}

	ngOnInit(): void { }

	public submitForm(): void {
		console.log('submitForm', this.tutorialForm);
	}
}

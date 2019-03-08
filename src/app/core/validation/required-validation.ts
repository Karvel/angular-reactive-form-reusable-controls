import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class RequiredValidation {
/**
 * Returns an error if the passed in control has no value.
 */
	static required(placeholder: string = 'This field'): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			if (!control.value) {
				return { 'isRequired' : `${placeholder} is required.` };
			}

			return null;
		};
	}
}

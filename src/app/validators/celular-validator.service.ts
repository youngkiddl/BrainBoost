import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CelularValidator {

  public celularChilenoValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const celular = control.value;

      
      if (!/^(\+?56)?(9)([0-9]{8})$/.test(celular)) {
        return { 'celularChilenoInvalido': true };
      }

      return null;

    }
  }
}

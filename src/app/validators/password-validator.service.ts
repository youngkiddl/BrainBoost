import { Injectable } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class PasswordValidator {
  // Verificar si la contraseña contiene al menos una letra minúscula, una letra mayúscula, un número y un carácter especial
  public validarContrasena(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const contrasena = control.value;
      if (!/(?=.*[a-z])/.test(contrasena)) {
        return { faltaMinuscula: true };
      }

      if (!/(?=.*[A-Z])/.test(contrasena)) {
        return { faltaMayuscula: true };
      }

      if (!/(?=.*[0-9])/.test(contrasena)) {
        return { faltaNumero: true };
      }

      if (!/(?=.*[$@$!%*?&])/.test(contrasena)) {
        return { faltaEspecial: true };
      }

      return null;
    };
  }

  public campoUnoIgualCampoDos(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }

      formGroup.get(field2)?.setErrors(null);

      return null;
    };
  }

  // public contrasenaMensaje( form: FormGroup, field: string ): string | null {

  //   if ( !form.controls[field]  ) return null;
  //   const errors = form.controls[field].errors || {} ;

  //   for ( const key of Object.keys(errors) ) {
  //     switch( key) {

  //       case 'faltaMinuscula':
  //         return `Falta minuscula`;

  //       case 'faltaMayuscula':
  //         return 'falta mayuscula';

  //       case 'faltaNumero':
  //         return 'falta mayuscula';

  //       case 'faltaEspecial':
  //         return 'falta mayuscula';

  //     }
  //   }

  //   return null;
  // }
}

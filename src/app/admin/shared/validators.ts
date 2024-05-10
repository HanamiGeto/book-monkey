import { isFormArray, ValidatorFn } from '@angular/forms';

export const atLeastOneValue: ValidatorFn = function (control) {
  if (!isFormArray(control)) {
    return null;
  }

  if (control.controls.some((el) => !!el.value)) {
    return null;
  } else {
    return { atLeastOneValue: true };
  }
};

export const isbnFormat: ValidatorFn = function (control) {
  if (!control.value || typeof control.value !== 'string') {
    return null;
  }

  const isbnWithoutDashed = control.value.replace(/-/g, '');
  const length = isbnWithoutDashed.length;

  if (length === 10 || length === 13) {
    return null;
  } else {
    return { isbnFormat: true };
  }
};

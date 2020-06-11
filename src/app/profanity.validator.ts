import { AbstractControl } from '@angular/forms';
import profanityFilter from 'simple-profanity-filter';

export function profanityValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  if (
    control.value !== undefined &&
    profanityFilter.filter(control.value) !== control.value
  ) {
    return { profanity: true };
  }
  return null;
}

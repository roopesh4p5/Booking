import { ResolveFn } from '@angular/router';

export const routsResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};

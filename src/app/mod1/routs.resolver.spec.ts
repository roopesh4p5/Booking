import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { routsResolver } from './routs.resolver';

describe('routsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => routsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

//Name: Christopher Lavin 
//StudentID: S00251319

import { TestService } from './testservice';

describe('TestService', () => {
  it('should return "lastname, firstname" from fullName', () => {
    let service = new TestService();
    expect(service.fullName('John', 'Doe')).toBe('Doe, John');
  });

  it('should return the number if greater than zero in compute', () => {
    let service = new TestService();
    expect(service.compute(5)).toBe(5);
  });

  it('should return zero if number is less than zero in compute', () => {
    let service = new TestService();
    expect(service.compute(-3)).toBe(0);
  });

  it('should return zero if number is zero in compute', () => {
    let service = new TestService();
    expect(service.compute(0)).toBe(0);
  });
});

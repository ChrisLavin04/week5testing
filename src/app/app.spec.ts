import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { App } from './app';

describe('App', () => {
  it('should call TestService.fullName on submit', () => {
    let fixture = TestBed.createComponent(App);
    let app = fixture.componentInstance;
    let spy = vi.spyOn(app['testService'], 'fullName');
    
    app.firstName = 'Chris';
    app.lastName = 'Lavin';
    app.onSubmit();
    
    expect(spy).toHaveBeenCalledWith('Chris', 'Lavin');
  });

  it('should display formatted name in <p> after submit', () => {
    let fixture = TestBed.createComponent(App);
    let app = fixture.componentInstance;
    
    app.firstName = 'Chris';
    app.lastName = 'Lavin';
    app.onSubmit();
    fixture.detectChanges();
    
    let nameElement = fixture.nativeElement.querySelector('p');
    expect(nameElement.textContent?.trim()).toContain('Lavin, Chris'); // passes test
  });
});

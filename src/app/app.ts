import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestService } from './testservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('week5testing');


  // Form fields as component properties
  firstName: string = '';
  lastName: string = '';
  submittedName: string = '';

  // Service instance
  private testService = new TestService();

  // Handler for form submit
  onSubmit() {
    const formatted = this.testService.fullName(this.firstName, this.lastName);
    this.submittedName = formatted;
  }
}

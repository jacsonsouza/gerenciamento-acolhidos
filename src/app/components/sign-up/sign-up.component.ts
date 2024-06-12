import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/db/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [HttpClient, UserService],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.signupForm.invalid) return; // Check for form validity

    this.userService.createUser(this.signupForm.value).subscribe(
      (response) => {
        console.log('User created successfully!', response);
        // Reset the form: this.signupForm.reset(); (if needed)
        alert('User created successfully!');
      },
      (error) => {
        console.error('Error creating user', error);
        // Handle specific error cases (e.g., email already exists)
        alert('Error creating user. Please check your details.');
      }
    );
  }
}

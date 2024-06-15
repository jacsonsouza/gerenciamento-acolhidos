import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { FlashMessageService } from '../../services/flash-message/flash-message.service';
import { FlashMessageComponent } from '../flash-message/flash-message.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FlashMessageComponent,
    CommonModule,
  ],
  providers: [HttpClient, AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private flashMessageService: FlashMessageService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login(): void {
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: (response) => {
          if (response.type === 'success') this.router.navigate(['/']);

          this.flashMessageService.sendMessage({
            type: response.type,
            message: response.message,
          });
        },
        error: (response) =>
          this.flashMessageService.sendMessage({
            type: response.type,
            message: response.message,
          }),
      });
  }
}

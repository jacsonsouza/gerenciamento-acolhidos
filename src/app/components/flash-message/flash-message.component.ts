import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlashMessageService } from '../../services/flash-message/flash-message.service';
import { CommonModule } from '@angular/common';
import { FlashMessage } from '../../interfaces/flash-message';

@Component({
  selector: 'app-flash-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css'],
})
export class FlashMessageComponent implements OnInit, OnDestroy {
  flashMessage: FlashMessage = { type: 'success', message: '' };
  subscription!: Subscription;

  constructor(private flashMessageService: FlashMessageService) {}

  ngOnInit() {
    this.subscription = this.flashMessageService
      .getMessage()
      .subscribe((response) => {
        this.flashMessage = {
          type: response.type,
          message: response.message,
        };
        if (response) {
          setTimeout(() => this.flashMessageService.clearMessage(), 10000);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

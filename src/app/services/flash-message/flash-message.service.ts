import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { FlashMessage } from '../../interfaces/flash-message';

@Injectable({
  providedIn: 'root',
})
export class FlashMessageService {
  private subject = new Subject<FlashMessage>();

  sendMessage(flashMessage: FlashMessage) {
    this.subject.next(flashMessage);
  }

  getMessage(): Observable<FlashMessage> {
    return this.subject.asObservable();
  }

  clearMessage() {
    this.subject.next({ type: 'success', message: '' });
  }
}

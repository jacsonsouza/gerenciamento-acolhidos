export interface FlashMessage {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

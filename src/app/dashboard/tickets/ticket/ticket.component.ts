import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input<Ticket>();
  detailsVisible = signal(false);
  close = output();

  onToggleDetails() {
    this.detailsVisible.update((isVisible) => !isVisible);
  }

  onMarkTicketClose() {
    this.close.emit();
  }
}

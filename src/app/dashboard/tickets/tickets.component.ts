import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './tickets.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    this.tickets.push({
      id: Math.random().toString(),
      title: ticketData.title,
      text: ticketData.text,
      status: 'open',
    });
  }

  onTicketClose(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        ticket.status = 'closed';
        return ticket;
      }
      return ticket;
    });
  }
}

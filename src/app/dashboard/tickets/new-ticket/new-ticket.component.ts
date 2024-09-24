import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('serverForm') form?: ElementRef<HTMLFormElement>;

  private form = viewChild<ElementRef<HTMLFormElement>>('serverForm');
  add = output<{ title: string; text: string }>();
  ngOnInit(): void {
    console.log(this.form());
  }

  ngAfterViewInit(): void {
    console.log(this.form());
  }
  onSubmit(title: string, text: string) {
    this.add.emit({
      title,
      text,
    });
    this.form()?.nativeElement.reset();
  }
}

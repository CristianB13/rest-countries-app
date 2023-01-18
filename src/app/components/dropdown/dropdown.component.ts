import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() text!: string;
  @Input() options!: string[];
  @Output() select = new EventEmitter<string>;
  open: boolean = false;

  @HostListener('click')
  openClose(): void {
    this.open = !this.open;
  }

  onClick(value: string): void {
    this.select.emit(value);
  }
}

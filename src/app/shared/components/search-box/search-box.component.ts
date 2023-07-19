import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  miVariable = ''

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>()

  public emitValue(value: string): void {
    console.log(this.miVariable);
    this.onValue.emit(value);
  }

}

import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent implements ControlValueAccessor {
  @Input() dropdownValues: any // Initialize the array as an empty array
  @Input() selectedvalue: any;
  @Output() selectedValueChange=new EventEmitter<any>();
  onChange: any = () => {};
  onTouched: any = () => {};
  constructor() { }

  ngOnInit(): void {
  }
  onSelectionChange(event: any) {

      this.selectedvalue = event.value;
      this.onChange(this.selectedvalue);
      this.onTouched();
      this.selectedValueChange.emit(event.value);
      console.log(this.selectedvalue);
    }



  writeValue(value: any) {
    this.selectedvalue = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}

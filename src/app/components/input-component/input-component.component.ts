import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss'],
})
export class InputComponentComponent implements ControlValueAccessor {
  input!: string;
  @Input() label!:string
  @Input() type!:string

  onchange: any = () => {};
  ontouched: any = () => {};

  constructor() {}
  writeValue(input: any): void {
    this.input = input;
  }
  registerOnChange(fn: any): void {
    this.onchange = fn;
  }
  registerOnTouched(fn: any): void {
    this.ontouched = fn;
  }

  ngOnInit(): void {}
}

import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
export interface ButtonData {
  text?: string;
  icon?: string; // Icon to be displayed
  height?: number;
  width?: number;
  iconPosition?: 'before' | 'after' | 'only'; // Icon position property
}

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit {
  @Input() heading: string = '';
  @Input() buttons: ButtonData[] = [];
  @Output() fullSCreenWidth = new EventEmitter<boolean>();
  screenWidth:boolean=false
  constructor() { }

  ngOnInit(): void {
      // Default value for iconPosition is 'before' if not provided
      this.buttons.forEach((button: ButtonData) => {
        button.iconPosition = button.iconPosition || 'before';
      });
  }

  fullSCreen(){
this.screenWidth=!this.screenWidth
this.fullSCreenWidth.emit(this.screenWidth)
  }

}

import { Component, OnInit, ViewChild, Input,ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-menu-panel",
  templateUrl: "./menu-panel.component.html",
  styleUrls: ["./menu-panel.component.scss"],
  encapsulation:ViewEncapsulation.None
})
export class MenuPanelComponent implements OnInit {
  @ViewChild("menu", {static: true}) menu:any;
  @Input() items!:any;

  constructor() {}

  ngOnInit() {}
}

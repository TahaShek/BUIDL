import { Component, OnInit, Input, Output, EventEmitter ,} from '@angular/core';
import { DataTableFilterPipe } from 'src/app/pipes/dataTablefilter.pipe';
import { Select, initTE } from "tw-elements";



export interface DataTableHeader {
  fieldName: string; // The actual property name in the data
  heading: string; // The name shown in the UI as the table heading
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  providers: [DataTableFilterPipe],

})
export class DatatableComponent implements OnInit {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  @Input() headers!: DataTableHeader[];
  @Input() data!: any[];
  @Output() menuOpen = new EventEmitter<any>();
  @Output() rowClick = new EventEmitter<any>();
  items = [
    {name: 'One'}
  ]

  sortField!: string;
  sortOrder: 'asc' | 'desc' = 'asc';
  isHeaderCheckboxChecked: boolean = false;
  searchTerm: string = '';
  selectedColumn: string = '';
  selectedRowData: any | null = null;
  isEditing: boolean = false;
  selectedHeader: DataTableHeader | null = null;
  value: boolean = true;
  selectedField!: string;

  constructor() {}
  ngOnInit(): void {
    initTE({ Select});
    console.log('sd')

  }

  sortByField(fieldName: string) {
    if (this.sortField === fieldName) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = fieldName;
      this.sortOrder = 'asc';
    }
    this.sortData();
  }

  sortData() {
    this.data.sort((a, b) => {
      const fieldA = a[this.sortField];
      const fieldB = b[this.sortField];
      if (fieldA < fieldB) {
        return this.sortOrder === 'asc' ? -1 : 1;
      } else if (fieldA > fieldB) {
        return this.sortOrder === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
  toggleAllRowCheckboxes() {
    for (const item of this.data) {
      item.isChecked = this.isHeaderCheckboxChecked;
    }
    this.isHeaderCheckboxChecked = this.areAllRowCheckboxesChecked();
  }

  areAllRowCheckboxesChecked(): boolean {
    return this.data.every((item) => item.isChecked);
  }

  openMenu() {
    this.value = !this.value; // Toggle the value here
    this.menuOpen.emit(this.value);
  }

  onRowClick(rowData: any) {
    this.rowClick.emit(rowData);


  }

  onSearch() {
    console.log('Search Term:', this.searchTerm);
    console.log('Selected Column:', this.selectedColumn);
  }
  onRowDoubleClick(item: any, columnIndex: number) {
    this.selectedRowData = { ...item };
    this.selectedField = this.headers[columnIndex].fieldName;
    this.isEditing = true;
  }

  // onDropdownItemClick(field: string) {
  //   this.selectedColumn = field; // Update the selectedColumn with the clicked field
  // }

}




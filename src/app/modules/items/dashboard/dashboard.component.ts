import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface DataTableHeader {
  fieldName: string; // The actual property name in the data
  heading: string; // The name shown in the UI as the table heading
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  amisForm:FormGroup|any
  headers: DataTableHeader[] = [
    { fieldName: 'Name', heading: 'Full Name' },
    { fieldName: 'Age', heading: 'Age' },
    { fieldName: 'Country', heading: 'Country of Origin' },
    // Add more headers as needed
  ];

  data: any[] = [
    { Name: 'John Doe', Age: 30, Country: 'USA', isChecked: false },
    { Name: 'Alice Smith', Age: 25, Country: 'Canada', isChecked: false },
    { Name: 'Alice Smith', Age: 25, Country: 'Canada', isChecked: false },
    { Name: 'Alice Smith', Age: 25, Country: 'Canada', isChecked: false },
    { Name: 'Alice Smith', Age: 25, Country: 'Canada', isChecked: false },
    { Name: 'Alice Smith', Age: 25, Country: 'Canada', isChecked: false },
    // Add more data rows as needed
  ];
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formInit()

  }
  formInit(){
  this.amisForm=this.formBuilder.group({
    name:['']
  })
  }


  onRowClick(rowData: any) {
    console.log('Clicked row data:', rowData);
  }


  submitForm(){
this.amisForm.value
  }
}

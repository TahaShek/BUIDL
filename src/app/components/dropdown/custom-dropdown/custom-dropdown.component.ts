import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation, Injector, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BaseComponent } from 'src/app/core/base';
import { DashboardComponent } from 'src/app/modules/items/dashboard/dashboard.component';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDropdownComponent),
      multi: true,
    },
  ],
})
export class CustomDropdownComponent extends BaseComponent implements ControlValueAccessor {
  @Input() endpoint!: string;
  @Input() fieldName: any;
  @Input() isDisable: any = false;
  dropdownValues: { value: string; label: string }[] = []; // Initialize the array as an empty array
  selectedvalue: any;
  onChange: any = () => {};
  onTouched: any = () => {};
  @Input()  listEndpoint: boolean = false;
  @Output() selectedValueChange = new EventEmitter<any>();
  @Output () openForm=new EventEmitter <string>()
  @Input() createLabel:any


  constructor(injector: Injector, private service: DialogService, private ref: DynamicDialogRef, private cdr: ChangeDetectorRef) {
    super(injector);
  }

  fillDropDownData() {
    // Check if the "Create Item" option exists in the dropdownValues array obtained from the first function
    const createItemOption = this.dropdownValues.find((option) => option.value === 'create');


    if (!this.listEndpoint) {
      // Commenting out API code since you don't have the API available
      // if (!localStorage.getItem(this.endpoint)) {
      //   this._http
      //     .GetByObservable('common/seed/?Code=' + this.endpoint)
      //     .subscribe((res) => {
      //       if (res.data && res.data.length > 0) {
      //         this.dropdownValues = res.data.map((item: any) => ({
      //           value: item.id,
      //           label: item.value,
      //         }));
      //         localStorage.setItem(this.endpoint, JSON.stringify(res.data));

      //         // Add the "Create Item" option if it doesn't already exist in dropdownValues
      //         if (!createItemOption) {
      //           this.dropdownValues.push({ value: 'create', label: 'Create Item' });
      //         }
      //       } else {
      //         // If there are no items from the API, set the dropdownValues array to contain only the "Create Item" option
      //         this.dropdownValues = [{ value: 'create', label: 'Create Item' }];
      //       }
      //     });
      // } else {
      //   // If the data exists in the local storage, retrieve it and add the "Create Item" option if needed
      //   const storedData = localStorage.getItem(this.endpoint);
      //   if (storedData) {
      //     this.dropdownValues = JSON.parse(storedData).map((item: { id: any; value: any }) => ({
      //       value: item.id,
      //       label: item.value,
      //     }));
      //   }
      //   if (!createItemOption) {
      //     this.dropdownValues.push({ value: 'create', label: 'Create Item' });
      //   }
      // }
      // If you don't have the API, use the default dropdownValues containing only the "Create Item" option
      if (!createItemOption) {
        this.dropdownValues = [{ value: 'create', label: this.createLabel}];

      }
    } else {
      // Commenting out API code since you don't have the API available
      // this._http
      //   .GetByObservable('common/list/?Code=' + this.endpoint + '&TenantId=' + this.CurrentTenentId)
      //   .subscribe((res) => {
      //     this.dropdownValues = res.data;
      //     if (res.data && res.data.length > 0) {
      //       this.dropdownValues = res.data.map((item: any) => ({
      //         value: item.value,
      //         label: item.label,
      //       }));

      //       // Add the "Create Item" option if it doesn't already exist in dropdownValues
      //       if (!createItemOption) {
      //         this.dropdownValues.push({ value: 'create', label: 'Create Item' });
      //       }
      //     } else {
      //       // If there are no items from the API, set the dropdownValues array to contain only the "Create Item" option
      //       this.dropdownValues = [{ value: 'create', label: 'Create Item' }];
      //     }
      //   });
      // If you don't have the API, use the default dropdownValues containing only the "Create Item" option
      if (!createItemOption) {
        this.dropdownValues = [{ value: 'create', label:this.createLabel  }];
      }
    }
  }


  ngAfterViewInit() {
    this.fillDropDownData();
  }

    onSelectionChange(event: any) {
    if (event.value === 'create') {
      this.openCreationForm();
      setTimeout(() => {
        this.selectedvalue = null;
        this.cdr.detectChanges();
      }, 100);
    } else {
      this.selectedvalue = event.value;
      this.onChange(this.selectedvalue);
      this.onTouched();
      this.selectedValueChange.emit(event.value);
      console.log(this.selectedvalue);
    }
  }
  // onSelectionChange(event: any) {
  //   if (event.value === 'create') {
  //     this.openItemCreationForm();
  //      // Call the method to handle item creation

  //     // After performing the action, reset the selected value to null
  //     this.selectedvalue = null;
  //     // Trigger change detection manually to update the dropdown view
  //     this.cdr.detectChanges();
  //   } else {
  //     this.selectedvalue = event.value;
  //     this.onChange(this.selectedvalue);
  //     this.onTouched();
  //     this.selectedValueChange.emit(event.value);
  //   }
  // }

  writeValue(value: any) {
    this.selectedvalue = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  openCreationForm() {
    this.openForm.emit()
    // console.log('hello', this.dropdownValues);

    // this._router.navigate(['items/dashboard'])
    // this.ref = this.service.open(DashboardComponent, {
    //   width: '50%',
    // });
    // Implement the method to open the item creation form or dialog
    // For example, you can use a dialog component or navigate to a new route to show the form
    // Example for dialog:
    // const dialogRef = this.dialog.open(ItemCreationComponent, {
    //   width: '400px',


  }
}




  // onSelectionChange(event: any) {
  //   if (event.value === 'create') {
  //     this.openItemCreationForm();
  //     setTimeout(() => {
  //       this.selectedvalue = null;
  //       this.cdr.detectChanges();
  //     }, 100);
  //   } else {
  //     this.selectedvalue = event.value;
  //     this.onChange(this.selectedvalue);
  //     this.onTouched();
  //     this.selectedValueChange.emit(event.value);
  //     console.log(this.selectedvalue);
  //   }
  // }

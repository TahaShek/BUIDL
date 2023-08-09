import { Pipe, PipeTransform } from '@angular/core';
export interface DataTableHeader {
  fieldName: string; // The actual property name in the data
  heading: string; // The name shown in the UI as the table heading
}
@Pipe({
  name: 'datatableFilter'
})
export class DataTableFilterPipe implements PipeTransform {
  transform(data: any[], searchTerm: string, headers: DataTableHeader[], selectedColumn: string): any[] {
    if (!data || (!searchTerm && !selectedColumn)) {
      return data;
    }

    if (!searchTerm) {
      return data;
    }

    searchTerm = searchTerm.toLowerCase();
    return data.filter((item) => {
      if (!selectedColumn) {
        // If no column is selected, search in all columns
        for (const header of headers) {
          const field = item[header.fieldName];
          if (field && field.toString().toLowerCase().includes(searchTerm)) {
            return true;
          }
        }
      } else {
        // If a column is selected, search in that specific column
        const field = item[selectedColumn];
        if (field && field.toString().toLowerCase().includes(searchTerm)) {
          return true;
        }
      }
      return false;
    });
  }
}

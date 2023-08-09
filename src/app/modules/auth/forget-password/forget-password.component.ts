import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
submitted:boolean = false;
amisForgetForm!:FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formInit()
  }
  formInit() {
    this.amisForgetForm = this.formBuilder.group({
      email: ['',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
      ]


    });
  }

  get f (){
    return this.amisForgetForm.controls
  }
  preventSpaces(event: KeyboardEvent): void {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }
  submitForm() {
    this.submitted = true;
    if (!this.amisForgetForm.valid) {
      return;
    }
    else{
      this.amisForgetForm.value
    }

  }

}

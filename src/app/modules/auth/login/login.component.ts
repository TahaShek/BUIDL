import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  amisLoginForm!: FormGroup;
  passwordVisible = false;
  submitted:boolean=false
  emailInputFocused: boolean = false;

  constructor(private formBuiler: FormBuilder,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.formInit();

  }

  formInit() {
    this.amisLoginForm = this.formBuiler.group({
      email: ['',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],      ]
       ,
      password: ['',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40),
      ],    ],
    });


  }

  get f(){
    return this.amisLoginForm.controls
  }
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  preventSpaces(event: KeyboardEvent): void {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }
  submitForm() {
    this.submitted = true;
    if (!this.amisLoginForm.valid) {
      return;
    }
    else{
      this.amisLoginForm.value
    }

  }
  }



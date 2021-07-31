import { Component, Output, EventEmitter, Input } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from './validators';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  userForm: any;

  @Input() id: number = 0;
  @Output() addNewForm = new EventEmitter<any>();
  @Output() deleteForm = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.minLength(3)]],
      lname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      rate: ['', [Validators.min(1), Validators.max(10)]],
      psw: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9$@$!%*?&].{6,}')]],
      confirmPsw: ['', Validators.required]
    }, {
      validator: MustMatch('psw', 'confirmPsw')
    });
  }

  add() {
    this.addNewForm.emit();
  }
  delete() {
    this.deleteForm.emit(this.id);
  }
}
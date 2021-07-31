import { FormBuilderComponent } from './form-builder/form-builder.component';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrForm: FormBuilderComponent[] = [new FormBuilderComponent(new FormBuilder)];

  add() {
    this.arrForm.push(new FormBuilderComponent(new FormBuilder))
  }
  delete(i:number) {
    this.arrForm.splice(i, 1);
  }

  onSubmit(): void {
    if(this.arrForm.length > 10) {
      alert('You can submit only 10 forms');
      return;
    }
    for(const form of this.arrForm) {
      if(form.userForm.invalid) {
        alert('All forms must be valid');
        return;
      }
    }
    
    this.arrForm.map(el => console.log(el.userForm));
  }
}
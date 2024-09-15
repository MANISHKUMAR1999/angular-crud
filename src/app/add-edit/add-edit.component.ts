import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent implements OnInit {
  empForm: FormGroup;
  education: string[] = [
    'Metric',
    'Diploma',
    'Intermediate',
    'Bachelors',
    'Masters',
  ];

  constructor(
    private _fb: FormBuilder,
    private _employee: EmployeeService,
    public dialogRef: MatDialogRef<AddEditComponent>,
    private _coreService:CoreService,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data)
  }
  onFormSubmit() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
      if(this.data){
        this._employee.updateEmployee(this.data.id,this.empForm.value).subscribe({
          next: () => {
           this._coreService.openSnackBar('Employee Updated!!!')
            this.dialogRef.close(true);
          },
          error: (err) => {
            console.error(err);
          },
        });

      }else{
        this._employee.addEmployee(this.empForm.value).subscribe({
          next: () => {
           this._coreService.openSnackBar('Employye Added!!! successfully')
            this.dialogRef.close(true);
          },
          error: (err) => {
            console.error(err);
          },
        });
      }
      }
     
  }
}

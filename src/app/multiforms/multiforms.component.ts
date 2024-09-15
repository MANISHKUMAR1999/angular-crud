import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiforms',
  templateUrl: './multiforms.component.html',
  styleUrls: ['./multiforms.component.css']
})
export class MultiformsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  isLinear = false;
  ngOnInit(): void {
  }

  EmpRegister = this.fb.group({
    basic:this.fb.group({
      firstName:this.fb.control('',Validators.required),
      lastName:this.fb.control('',Validators.required)

    }),
    contact:this.fb.group({
      email:this.fb.control('',Validators.required),
      phone:this.fb.control('',Validators.required),
      fax:this.fb.control('',Validators.required)

    }),
    address:this.fb.group({
      street:this.fb.control('',Validators.required),
      city:this.fb.control('',Validators.required),
      pin:this.fb.control('',Validators.required)

    })

  })

}

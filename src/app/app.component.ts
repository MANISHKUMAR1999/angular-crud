import { Component,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from './add-edit/add-edit.component';
import { EmployeeService } from './services/employee.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['id','firstName', 'lastName', 'email', 'dob','gender','education','company','experience','package','actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _dialog:MatDialog, private _employeeService:EmployeeService,private _coreService:CoreService){

  }
  title = 'stepper';

  openAddEditForm(){
   const dialogRef =  this._dialog.open(AddEditComponent);
   dialogRef.afterClosed().subscribe({
    next:(val)=>{
      if(val){
        this.getEmployeeList()
      }
    }
   })
  }

  ngOnInit():void{
this.getEmployeeList()
  }

  getEmployeeList(){
    this._employeeService.getEmployeeList().subscribe({
      next:(res:any)=>{
console.log(res)
this.dataSource = new MatTableDataSource(res);
this.dataSource.sort = this.sort;
this.dataSource.paginator = this.paginator

      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id:number){
    this._employeeService.getDeleteEmployeeData(id).subscribe({
      next:(res)=>{
       this._coreService.openSnackBar('Employee Deleted!!','ok')
        this.getEmployeeList()


      },
      error:(err)=>{
        console.log(err)
      }

    })

  }

  openEditForm(data:any){
 const dialogRef = this._dialog.open(AddEditComponent,{
  data:data
});
dialogRef.afterClosed().subscribe({
  next:(val)=>{
    if(val){
      this.getEmployeeList()
    }
  }
 })
   
   }
 

}

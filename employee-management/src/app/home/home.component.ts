import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees$: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.employees$ = this.employeeService.getEmployees();
  }

  openDialog(employee?: Employee): void {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      width: '250px',
      data: employee || {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.id) {
          this.employeeService.updateEmployee(result);
        } else {
          this.employeeService.addEmployee(result);
        }
      }
    });
  }

  deleteEmployee(id: string): void {
    this.employeeService.deleteEmployee(id);
  }
}

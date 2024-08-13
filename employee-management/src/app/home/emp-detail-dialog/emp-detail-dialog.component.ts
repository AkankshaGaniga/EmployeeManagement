import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-emp-detail-dialog',
  templateUrl: './emp-detail-dialog.component.html',
  styleUrls: ['./emp-detail-dialog.component.css']
})
export class EmpDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EmpDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
``

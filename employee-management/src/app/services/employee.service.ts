import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesCollection = this.firestore.collection<Employee>('employees');

  constructor(private firestore: AngularFirestore) {}

  getEmployees(): Observable<Employee[]> {
    return this.employeesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Employee;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  addEmployee(employee: Employee): Promise<void> {
    const id = this.firestore.createId();
    return this.employeesCollection.doc(id).set({ ...employee, id });
  }

  updateEmployee(employee: Employee): Promise<void> {
    return this.employeesCollection.doc(employee.id).update(employee);
  }

  deleteEmployee(id: string): Promise<void> {
    return this.employeesCollection.doc(id).delete();
  }
}

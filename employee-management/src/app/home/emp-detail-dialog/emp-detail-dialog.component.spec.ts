import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailDialogComponent } from './emp-detail-dialog.component';

describe('EmpDetailDialogComponent', () => {
  let component: EmpDetailDialogComponent;
  let fixture: ComponentFixture<EmpDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpDetailDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

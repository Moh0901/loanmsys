import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { EditLoanComponent } from './edit-loan.component';

describe('EditLoanComponent', () => {
  let component: EditLoanComponent;
  let fixture: ComponentFixture<EditLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLoanComponent ],
      imports:[ HttpClientTestingModule, RouterTestingModule,  ToastrModule.forRoot() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

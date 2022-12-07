import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddLoanComponent } from './add-loan.component';
import { ToastrModule } from 'ngx-toastr';

describe('AddLoanComponent', () => {
  let component: AddLoanComponent;
  let fixture: ComponentFixture<AddLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLoanComponent ],
      imports:[HttpClientTestingModule, ToastrModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should submit form', () => {
    component.addLoanSubmitted();
    expect(component.addLoanForm).toBeTruthy();
  });

  it('should call onsubmit method', () => {
    spyOn(component,'addLoanSubmitted');
    expect(component.addLoanSubmitted).toBeTruthy();
  });

  it('form should be invalid', () => {
    component.addLoanForm.controls['firstname'].setValue('');
    component.addLoanForm.controls['lastname'].setValue('');
    component.addLoanForm.controls['address'].setValue('');
    component.addLoanForm.controls['amount'].setValue('');
    component.addLoanForm.controls['lnum'].setValue('');
    component.addLoanForm.controls['ltype'].setValue('');
    component.addLoanForm.controls['lterm'].setValue('');
    expect(component.addLoanForm.valid).toBeFalsy();
  });

  it('form should be valid', () =>{
    component.addLoanForm.controls['firstname'].setValue('mohit');
    component.addLoanForm.controls['lastname'].setValue('verma');
    component.addLoanForm.controls['address'].setValue('ludhiana');
    component.addLoanForm.controls['amount'].setValue('100');
    component.addLoanForm.controls['lnum'].setValue('12');
    component.addLoanForm.controls['ltype'].setValue('Home');
    component.addLoanForm.controls['lterm'].setValue('1');
    expect(component.addLoanForm.valid).toBeTruthy();
  });

});

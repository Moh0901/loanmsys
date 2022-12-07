import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { AddUserComponent } from './add-user.component';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserComponent ],
      imports:[HttpClientTestingModule,  ToastrModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid' , ()=>{
    component.addUserForm.controls['name'].setValue('');
    component.addUserForm.controls['username'].setValue('');
    component.addUserForm.controls['password'].setValue('');
    component.addUserForm.controls['role'].setValue('');
    expect(component.addUserForm.valid).toBeFalsy();
  });

  it('form should be valid' , ()=>{
    component.addUserForm.controls['name'].setValue('mohit');
    component.addUserForm.controls['username'].setValue('mohit37');
    component.addUserForm.controls['password'].setValue('admin');
    component.addUserForm.controls['role'].setValue('Admin');
    expect(component.addUserForm.valid).toBeTruthy();
  });

  it('should submit form', ()=>{
    component.addUserSubmitted();
    expect(component.addUserForm).toBeTruthy();
  });

  it('should call onsubmit method', ()=>{
    spyOn(component,'addUserSubmitted');
    expect(component.addUserSubmitted).toBeTruthy();
  });
});

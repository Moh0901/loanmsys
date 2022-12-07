import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[  RouterTestingModule,
        HttpClientTestingModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check login function',()=>{
    localStorage.setItem('token','xyxabcdefghijklmnopqrstuvw');
    expect(component.login()).toBe();
  });

  it('form should be invalid', ()=>{
    component.logInForm.controls['username'].setValue('');
    component.logInForm.controls['password'].setValue('');
    expect(component.logInForm.valid).toBeFalsy();
  });

  it('form should be valid', ()=>{
    component.logInForm.controls['username'].setValue('admin');
    component.logInForm.controls['password'].setValue('admin');
    expect(component.logInForm.valid).toBeTruthy();
  });

});

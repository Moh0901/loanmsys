import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { EdituserComponent } from './edituser.component';

describe('EdituserComponent', () => {
  let component: EdituserComponent;
  let fixture: ComponentFixture<EdituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituserComponent ],
      imports:[ HttpClientTestingModule, RouterTestingModule , BrowserTestingModule,  ToastrModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

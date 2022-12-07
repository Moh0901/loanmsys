import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let user: any[];
  let mockUserAppService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports:[ HttpClientTestingModule , ToastrModule.forRoot(), NgxPaginationModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    user = [
      { id: 1, name: "mohit", username: "abcteree", password: "whqihd", role: "Admin" },
      { id: 2, name: "mohit", username: "user", password: "user", role: "User" }
    ]

    mockUserAppService = jasmine.createSpyObj(['deleteUser']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove the loan with id 1', () => {
    // Arrange
    mockUserAppService.deleteUser.and.returnValue(of(true));
    component.allUsers = user;
    // Act
    component.deleteUser(user[0]);
    // Assert
    expect(component.allUsers).toBeTruthy();
  });
});

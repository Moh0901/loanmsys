import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';
import { SearchPipe } from 'src/app/search.pipe';
import { LoansComponent } from './loans.component';

describe('LoansComponent', () => {
  let component: LoansComponent;
  let fixture: ComponentFixture<LoansComponent>;
  let loans: any[];
  let mockLoanAppService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoansComponent, SearchPipe],
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), NgxPaginationModule, Ng2OrderModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loans = [
      { id:1, fname: 'mohit', lname: 'verma', paddress: 'ludhiana', lamount: '65544', lnum: '122', ltype: 'Home', lterm: '5' },
      { id:2, fname: 'gagan', lname: 'singh', paddress: 'mohali', lamount: '9000', lnum: '34', ltype: 'Study', lterm: '3' },
      { id:3, fname: 'naman', lname: 'jain', paddress: 'ropar', lamount: '9842', lnum: '8753', ltype: 'Vechicle', lterm: '2' }
    ]

    mockLoanAppService = jasmine.createSpyObj(['deleteLoan']);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove the loan with id 2', () => {
    // Arrange
    mockLoanAppService.deleteLoan.and.returnValue(of(true));
    component.allLoans = loans;
    // Act
    component.deleteLoan(loans[1]);
    // Assert
    expect(component.allLoans).toBeTruthy();
  });
});



import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LoanAppService } from './loan-app.service';

describe('LoanAppService', () => {
  let service: LoanAppService;
  // let httpMock: HttpTestingController
  // let API_URL: "https://localhost:7172/api/Users";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(LoanAppService);
   //httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

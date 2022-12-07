import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenHandlerInterceptor } from './token-handler.interceptor';

describe('TokenHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenHandlerInterceptor
      ],
      imports:[
        HttpClientTestingModule
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenHandlerInterceptor = TestBed.inject(TokenHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

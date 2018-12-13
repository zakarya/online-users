import { TestBed, inject } from '@angular/core/testing';

import { UserDataService } from './user-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserDataService,
        HttpClientModule
      ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([UserDataService], (service: UserDataService) => {
    expect(service).toBeTruthy();
  }));
});

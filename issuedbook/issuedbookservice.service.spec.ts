import { TestBed } from '@angular/core/testing';

import { IssuedbookserviceService } from './issuedbookservice.service';

describe('IssuedbookserviceService', () => {
  let service: IssuedbookserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuedbookserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

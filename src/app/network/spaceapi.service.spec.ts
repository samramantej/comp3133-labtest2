import { TestBed } from '@angular/core/testing';

import { SpaceapiService } from './spaceapi.service';

describe('SpaceapiService', () => {
  let service: SpaceapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

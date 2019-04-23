import { TestBed } from '@angular/core/testing';

import { NotSubscriptionService } from './not-subscription.service';

describe('NotSubscriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotSubscriptionService = TestBed.get(NotSubscriptionService);
    expect(service).toBeTruthy();
  });
});

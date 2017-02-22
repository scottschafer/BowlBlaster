import { TestBed, inject } from '@angular/core/testing';
import { EventPublisherService } from './event-publisher.service';

describe('EventPublisherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventPublisherService]
    });
  });

  it('should ...', inject([EventPublisherService], (service: EventPublisherService) => {
    expect(service).toBeTruthy();
  }));
});

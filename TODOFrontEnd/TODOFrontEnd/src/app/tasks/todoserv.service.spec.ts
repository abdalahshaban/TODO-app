import { TestBed } from '@angular/core/testing';

import { TodoservService } from './todoserv.service';

describe('TodoservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoservService = TestBed.get(TodoservService);
    expect(service).toBeTruthy();
  });
});

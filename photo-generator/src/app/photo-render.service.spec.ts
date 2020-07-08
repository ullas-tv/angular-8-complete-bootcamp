import { TestBed } from '@angular/core/testing';

import { PhotoRenderService } from './photo-render.service';

describe('PhotoRenderService', () => {
  let service: PhotoRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

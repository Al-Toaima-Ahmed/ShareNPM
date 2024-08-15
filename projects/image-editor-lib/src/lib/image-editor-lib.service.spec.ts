import { TestBed } from '@angular/core/testing';

import { ImageEditorLibService } from './image-editor-lib.service';

describe('ImageEditorLibService', () => {
  let service: ImageEditorLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageEditorLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

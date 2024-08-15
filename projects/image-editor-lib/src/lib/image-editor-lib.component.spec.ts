import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageEditorLibComponent } from './image-editor-lib.component';

describe('ImageEditorLibComponent', () => {
  let component: ImageEditorLibComponent;
  let fixture: ComponentFixture<ImageEditorLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageEditorLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageEditorLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

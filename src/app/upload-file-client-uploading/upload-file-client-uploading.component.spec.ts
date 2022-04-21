import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileClientUploadingComponent } from './upload-file-client-uploading.component';

describe('UploadFileClientUploadingComponent', () => {
  let component: UploadFileClientUploadingComponent;
  let fixture: ComponentFixture<UploadFileClientUploadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileClientUploadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileClientUploadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilesClientComponent } from './upload-files-client.component';

describe('UploadFilesClientComponent', () => {
  let component: UploadFilesClientComponent;
  let fixture: ComponentFixture<UploadFilesClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFilesClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

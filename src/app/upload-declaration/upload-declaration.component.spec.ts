import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDeclarationComponent } from './upload-declaration.component';

describe('UploadDeclarationComponent', () => {
  let component: UploadDeclarationComponent;
  let fixture: ComponentFixture<UploadDeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDeclarationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

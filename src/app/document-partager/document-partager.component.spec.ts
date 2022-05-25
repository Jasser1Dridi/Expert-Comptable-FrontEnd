import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentPartagerComponent } from './document-partager.component';

describe('DocumentPartagerComponent', () => {
  let component: DocumentPartagerComponent;
  let fixture: ComponentFixture<DocumentPartagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentPartagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentPartagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

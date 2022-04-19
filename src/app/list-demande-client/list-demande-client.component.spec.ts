import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandeClientComponent } from './list-demande-client.component';

describe('ListDemandeClientComponent', () => {
  let component: ListDemandeClientComponent;
  let fixture: ComponentFixture<ListDemandeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDemandeClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemandeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

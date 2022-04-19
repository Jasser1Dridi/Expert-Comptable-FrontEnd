import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandeComptablComponent } from './list-demande-comptabl.component';

describe('ListDemandeComptablComponent', () => {
  let component: ListDemandeComptablComponent;
  let fixture: ComponentFixture<ListDemandeComptablComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDemandeComptablComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemandeComptablComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

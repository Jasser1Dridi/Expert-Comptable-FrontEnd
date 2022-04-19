import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFichiersComptableComponent } from './list-fichiers-comptable.component';

describe('ListFichiersComptableComponent', () => {
  let component: ListFichiersComptableComponent;
  let fixture: ComponentFixture<ListFichiersComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFichiersComptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFichiersComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceMesagerieComptableComponent } from './espace-mesagerie-comptable.component';

describe('EspaceMesagerieComptableComponent', () => {
  let component: EspaceMesagerieComptableComponent;
  let fixture: ComponentFixture<EspaceMesagerieComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceMesagerieComptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceMesagerieComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

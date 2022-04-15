import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComptableComponent } from './register-comptable.component';

describe('RegisterComptableComponent', () => {
  let component: RegisterComptableComponent;
  let fixture: ComponentFixture<RegisterComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceMessagerieComponent } from './espace-messagerie.component';

describe('EspaceMessagerieComponent', () => {
  let component: EspaceMessagerieComponent;
  let fixture: ComponentFixture<EspaceMessagerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceMessagerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceMessagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

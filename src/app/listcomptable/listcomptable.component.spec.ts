import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcomptableComponent } from './listcomptable.component';

describe('ListcomptableComponent', () => {
  let component: ListcomptableComponent;
  let fixture: ComponentFixture<ListcomptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcomptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcomptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAreasComponent } from './editar-areas.component';

describe('EditarAreasComponent', () => {
  let component: EditarAreasComponent;
  let fixture: ComponentFixture<EditarAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

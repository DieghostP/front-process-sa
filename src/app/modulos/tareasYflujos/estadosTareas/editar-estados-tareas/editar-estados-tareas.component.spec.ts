import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEstadosTareasComponent } from './editar-estados-tareas.component';

describe('EditarEstadosTareasComponent', () => {
  let component: EditarEstadosTareasComponent;
  let fixture: ComponentFixture<EditarEstadosTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEstadosTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEstadosTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

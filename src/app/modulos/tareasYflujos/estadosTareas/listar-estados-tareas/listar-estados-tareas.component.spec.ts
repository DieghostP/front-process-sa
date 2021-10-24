import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstadosTareasComponent } from './listar-estados-tareas.component';

describe('ListarEstadosTareasComponent', () => {
  let component: ListarEstadosTareasComponent;
  let fixture: ComponentFixture<ListarEstadosTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEstadosTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEstadosTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

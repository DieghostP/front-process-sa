import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTareasFlujosDeTrabajoComponent } from './editar-tareas-flujos-de-trabajo.component';

describe('EditarTareasFlujosDeTrabajoComponent', () => {
  let component: EditarTareasFlujosDeTrabajoComponent;
  let fixture: ComponentFixture<EditarTareasFlujosDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTareasFlujosDeTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTareasFlujosDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTareasFlujosDeTrabajoComponent } from './listar-tareas-flujos-de-trabajo.component';

describe('ListarTareasFlujosDeTrabajoComponent', () => {
  let component: ListarTareasFlujosDeTrabajoComponent;
  let fixture: ComponentFixture<ListarTareasFlujosDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTareasFlujosDeTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTareasFlujosDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

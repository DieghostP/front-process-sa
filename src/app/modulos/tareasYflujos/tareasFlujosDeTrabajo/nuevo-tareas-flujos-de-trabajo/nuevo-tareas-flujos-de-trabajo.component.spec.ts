import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTareasFlujosDeTrabajoComponent } from './nuevo-tareas-flujos-de-trabajo.component';

describe('NuevoTareasFlujosDeTrabajoComponent', () => {
  let component: NuevoTareasFlujosDeTrabajoComponent;
  let fixture: ComponentFixture<NuevoTareasFlujosDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoTareasFlujosDeTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTareasFlujosDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

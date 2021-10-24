import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEstadosTareasComponent } from './nuevo-estados-tareas.component';

describe('NuevoEstadosTareasComponent', () => {
  let component: NuevoEstadosTareasComponent;
  let fixture: ComponentFixture<NuevoEstadosTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEstadosTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEstadosTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

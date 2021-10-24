import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTareasComponent } from './nuevo-tareas.component';

describe('NuevoTareasComponent', () => {
  let component: NuevoTareasComponent;
  let fixture: ComponentFixture<NuevoTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

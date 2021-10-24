import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarColaboradoresEmpresaComponent } from './editar-colaboradores-empresa.component';

describe('EditarColaboradoresEmpresaComponent', () => {
  let component: EditarColaboradoresEmpresaComponent;
  let fixture: ComponentFixture<EditarColaboradoresEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarColaboradoresEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarColaboradoresEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

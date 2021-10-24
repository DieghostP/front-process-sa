import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarColaboradoresEmpresaComponent } from './listar-colaboradores-empresa.component';

describe('ListarColaboradoresEmpresaComponent', () => {
  let component: ListarColaboradoresEmpresaComponent;
  let fixture: ComponentFixture<ListarColaboradoresEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarColaboradoresEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarColaboradoresEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

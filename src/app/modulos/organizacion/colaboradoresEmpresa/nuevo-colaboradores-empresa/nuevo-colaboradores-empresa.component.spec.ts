import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoColaboradoresEmpresaComponent } from './nuevo-colaboradores-empresa.component';

describe('NuevoColaboradoresEmpresaComponent', () => {
  let component: NuevoColaboradoresEmpresaComponent;
  let fixture: ComponentFixture<NuevoColaboradoresEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoColaboradoresEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoColaboradoresEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

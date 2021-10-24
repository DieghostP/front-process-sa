import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEmpresasComponent } from './nuevo-empresas.component';

describe('NuevoEmpresasComponent', () => {
  let component: NuevoEmpresasComponent;
  let fixture: ComponentFixture<NuevoEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

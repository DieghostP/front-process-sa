import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarColaboradoresComponent } from './editar-colaboradores.component';

describe('EditarColaboradoresComponent', () => {
  let component: EditarColaboradoresComponent;
  let fixture: ComponentFixture<EditarColaboradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarColaboradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

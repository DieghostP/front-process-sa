import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUnidadesComponent } from './listar-unidades.component';

describe('ListarUnidadesComponent', () => {
  let component: ListarUnidadesComponent;
  let fixture: ComponentFixture<ListarUnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarUnidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

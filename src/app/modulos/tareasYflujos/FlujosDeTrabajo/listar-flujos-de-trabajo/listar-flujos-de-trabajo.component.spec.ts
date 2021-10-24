import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFlujosDeTrabajoComponent } from './listar-flujos-de-trabajo.component';

describe('ListarFlujosDeTrabajoComponent', () => {
  let component: ListarFlujosDeTrabajoComponent;
  let fixture: ComponentFixture<ListarFlujosDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFlujosDeTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFlujosDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

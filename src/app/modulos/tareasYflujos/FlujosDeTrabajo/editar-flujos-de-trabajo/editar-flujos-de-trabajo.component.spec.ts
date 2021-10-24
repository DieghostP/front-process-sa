import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFlujosDeTrabajoComponent } from './editar-flujos-de-trabajo.component';

describe('EditarFlujosDeTrabajoComponent', () => {
  let component: EditarFlujosDeTrabajoComponent;
  let fixture: ComponentFixture<EditarFlujosDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFlujosDeTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFlujosDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoFlujosDeTrabajoComponent } from './nuevo-flujos-de-trabajo.component';

describe('NuevoFlujosDeTrabajoComponent', () => {
  let component: NuevoFlujosDeTrabajoComponent;
  let fixture: ComponentFixture<NuevoFlujosDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoFlujosDeTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoFlujosDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

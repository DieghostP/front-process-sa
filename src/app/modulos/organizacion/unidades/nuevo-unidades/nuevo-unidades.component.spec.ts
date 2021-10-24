import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoUnidadesComponent } from './nuevo-unidades.component';

describe('NuevoUnidadesComponent', () => {
  let component: NuevoUnidadesComponent;
  let fixture: ComponentFixture<NuevoUnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoUnidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

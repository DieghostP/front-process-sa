import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoColaboradoresComponent } from './nuevo-colaboradores.component';

describe('NuevoColaboradoresComponent', () => {
  let component: NuevoColaboradoresComponent;
  let fixture: ComponentFixture<NuevoColaboradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoColaboradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

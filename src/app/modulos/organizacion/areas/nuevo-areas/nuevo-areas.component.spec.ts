import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAreasComponent } from './nuevo-areas.component';

describe('NuevoAreasComponent', () => {
  let component: NuevoAreasComponent;
  let fixture: ComponentFixture<NuevoAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

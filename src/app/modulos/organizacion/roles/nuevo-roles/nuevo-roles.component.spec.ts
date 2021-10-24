import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoRolesComponent } from './nuevo-roles.component';

describe('NuevoRolesComponent', () => {
  let component: NuevoRolesComponent;
  let fixture: ComponentFixture<NuevoRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

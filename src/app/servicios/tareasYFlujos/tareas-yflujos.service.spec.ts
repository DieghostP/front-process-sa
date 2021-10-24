import { TestBed } from '@angular/core/testing';

import { TareasYFlujosService } from './tareas-yflujos.service';

describe('TareasYFlujosService', () => {
  let service: TareasYFlujosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasYFlujosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

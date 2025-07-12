import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioAcademico } from './horario-academico';

describe('HorarioAcademico', () => {
  let component: HorarioAcademico;
  let fixture: ComponentFixture<HorarioAcademico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorarioAcademico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorarioAcademico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

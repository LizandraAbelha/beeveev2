import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarViagem } from './criar-viagem';

describe('CriarViagem', () => {
  let component: CriarViagem;
  let fixture: ComponentFixture<CriarViagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarViagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarViagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

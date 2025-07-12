import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCarro } from './cadastro-carro';

describe('CadastroCarro', () => {
  let component: CadastroCarro;
  let fixture: ComponentFixture<CadastroCarro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroCarro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroCarro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

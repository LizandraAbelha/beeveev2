import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viagens } from './viagens';

describe('Viagens', () => {
  let component: Viagens;
  let fixture: ComponentFixture<Viagens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viagens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viagens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

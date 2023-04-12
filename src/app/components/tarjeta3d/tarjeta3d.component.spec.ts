import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjeta3dComponent } from './tarjeta3d.component';

describe('Tarjeta3dComponent', () => {
  let component: Tarjeta3dComponent;
  let fixture: ComponentFixture<Tarjeta3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tarjeta3dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarjeta3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

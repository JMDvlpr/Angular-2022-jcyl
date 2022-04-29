import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorFilaComponent } from './selector-fila.component';

describe('SelectorFilaComponent', () => {
  let component: SelectorFilaComponent;
  let fixture: ComponentFixture<SelectorFilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorFilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresExternosComponent } from './investigadores-externos.component';

describe('InvestigadoresExternosComponent', () => {
  let component: InvestigadoresExternosComponent;
  let fixture: ComponentFixture<InvestigadoresExternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigadoresExternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresExternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcontacteComponent } from './ccontacte.component';

describe('CcontacteComponent', () => {
  let component: CcontacteComponent;
  let fixture: ComponentFixture<CcontacteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcontacteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcontacteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

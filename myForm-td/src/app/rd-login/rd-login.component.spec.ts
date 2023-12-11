import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdLoginComponent } from './rd-login.component';

describe('RdLoginComponent', () => {
  let component: RdLoginComponent;
  let fixture: ComponentFixture<RdLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RdLoginComponent]
    });
    fixture = TestBed.createComponent(RdLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

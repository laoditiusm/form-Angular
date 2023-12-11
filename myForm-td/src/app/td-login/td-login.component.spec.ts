import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdLoginComponent } from './td-login.component';

describe('TdLoginComponent', () => {
  let component: TdLoginComponent;
  let fixture: ComponentFixture<TdLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdLoginComponent]
    });
    fixture = TestBed.createComponent(TdLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

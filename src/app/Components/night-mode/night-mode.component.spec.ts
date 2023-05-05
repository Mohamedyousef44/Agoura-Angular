import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightModeComponent } from './night-mode.component';

describe('NightModeComponent', () => {
  let component: NightModeComponent;
  let fixture: ComponentFixture<NightModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NightModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NightModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

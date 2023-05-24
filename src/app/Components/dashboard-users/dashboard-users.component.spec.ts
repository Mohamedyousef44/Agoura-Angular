import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUsersComponent } from './dashboard-users.component';

describe('DashboardUsersComponent', () => {
  let component: DashboardUsersComponent;
  let fixture: ComponentFixture<DashboardUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

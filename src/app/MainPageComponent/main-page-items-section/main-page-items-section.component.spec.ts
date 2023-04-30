import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageItemsSectionComponent } from './main-page-items-section.component';

describe('MainPageItemsSectionComponent', () => {
  let component: MainPageItemsSectionComponent;
  let fixture: ComponentFixture<MainPageItemsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageItemsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageItemsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

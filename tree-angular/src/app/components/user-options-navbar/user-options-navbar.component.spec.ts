import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOptionsNavbarComponent } from './user-options-navbar.component';

describe('UserOptionsNavbarComponent', () => {
  let component: UserOptionsNavbarComponent;
  let fixture: ComponentFixture<UserOptionsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOptionsNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOptionsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityRegisterComponent } from './opportunity-register.component';

describe('OpportunityRegisterComponent', () => {
  let component: OpportunityRegisterComponent;
  let fixture: ComponentFixture<OpportunityRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

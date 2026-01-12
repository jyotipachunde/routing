import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersdashComponent } from './usersdash.component';

describe('UsersdashComponent', () => {
  let component: UsersdashComponent;
  let fixture: ComponentFixture<UsersdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

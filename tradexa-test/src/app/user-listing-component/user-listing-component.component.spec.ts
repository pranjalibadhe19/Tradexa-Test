import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListingComponentComponent } from './user-listing-component.component';

describe('UserListingComponentComponent', () => {
  let component: UserListingComponentComponent;
  let fixture: ComponentFixture<UserListingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

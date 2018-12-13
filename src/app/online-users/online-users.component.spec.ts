import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineUsersComponent } from './online-users.component';
import { HttpClientModule } from '@angular/common/http';

describe('OnlineUsersComponent', () => {
  let component: OnlineUsersComponent;
  let fixture: ComponentFixture<OnlineUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineUsersComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

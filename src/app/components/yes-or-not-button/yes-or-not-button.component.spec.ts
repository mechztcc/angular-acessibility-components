import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesOrNotButtonComponent } from './yes-or-not-button.component';

describe('YesOrNotButtonComponent', () => {
  let component: YesOrNotButtonComponent;
  let fixture: ComponentFixture<YesOrNotButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesOrNotButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YesOrNotButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

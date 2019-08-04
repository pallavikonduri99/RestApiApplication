import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UICompComponent } from './uicomp.component';

describe('UICompComponent', () => {
  let component: UICompComponent;
  let fixture: ComponentFixture<UICompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UICompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UICompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

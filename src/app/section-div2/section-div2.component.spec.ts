import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDiv2Component } from './section-div2.component';

describe('SectionDiv2Component', () => {
  let component: SectionDiv2Component;
  let fixture: ComponentFixture<SectionDiv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDiv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDiv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

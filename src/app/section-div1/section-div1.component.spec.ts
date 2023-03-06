import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDiv1Component } from './section-div1.component';

describe('SectionDiv1Component', () => {
  let component: SectionDiv1Component;
  let fixture: ComponentFixture<SectionDiv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDiv1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDiv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosInstructorComponent } from './cursos-instructor.component';

describe('CursosInstructorComponent', () => {
  let component: CursosInstructorComponent;
  let fixture: ComponentFixture<CursosInstructorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosInstructorComponent]
    });
    fixture = TestBed.createComponent(CursosInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

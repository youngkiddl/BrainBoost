import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVideoComponent } from './agregar-video.component';

describe('AgregarVideoComponent', () => {
  let component: AgregarVideoComponent;
  let fixture: ComponentFixture<AgregarVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarVideoComponent]
    });
    fixture = TestBed.createComponent(AgregarVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

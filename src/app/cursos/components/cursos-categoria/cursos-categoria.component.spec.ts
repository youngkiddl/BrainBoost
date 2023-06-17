import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCategoriaComponent } from './cursos-categoria.component';

describe('CursosCategoriaComponent', () => {
  let component: CursosCategoriaComponent;
  let fixture: ComponentFixture<CursosCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosCategoriaComponent]
    });
    fixture = TestBed.createComponent(CursosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

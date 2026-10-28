import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosGrid } from './cursos-grid';

describe('CursosGrid', () => {
  let component: CursosGrid;
  let fixture: ComponentFixture<CursosGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(CursosGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

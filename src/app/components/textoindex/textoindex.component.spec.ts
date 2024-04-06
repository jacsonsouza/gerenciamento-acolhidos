import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoindexComponent } from './textoindex.component';

describe('TextoindexComponent', () => {
  let component: TextoindexComponent;
  let fixture: ComponentFixture<TextoindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoindexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextoindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexthomeComponent } from './texthome.component';

describe('TexthomeComponent', () => {
  let component: TexthomeComponent;
  let fixture: ComponentFixture<TexthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TexthomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TexthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

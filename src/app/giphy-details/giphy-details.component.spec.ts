import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyDetailsComponent } from './giphy-details.component';

describe('GiphyDetailsComponent', () => {
  let component: GiphyDetailsComponent;
  let fixture: ComponentFixture<GiphyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

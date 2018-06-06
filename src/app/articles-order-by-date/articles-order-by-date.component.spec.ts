import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesOrderByDateComponent } from './articles-order-by-date.component';

describe('ArticlesOrderByDateComponent', () => {
  let component: ArticlesOrderByDateComponent;
  let fixture: ComponentFixture<ArticlesOrderByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesOrderByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesOrderByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

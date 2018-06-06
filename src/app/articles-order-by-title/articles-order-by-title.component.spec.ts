import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesOrderByTitleComponent } from './articles-order-by-title.component';

describe('ArticlesOrderByTitleComponent', () => {
  let component: ArticlesOrderByTitleComponent;
  let fixture: ComponentFixture<ArticlesOrderByTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesOrderByTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesOrderByTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

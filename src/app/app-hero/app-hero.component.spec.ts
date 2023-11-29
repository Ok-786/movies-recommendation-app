import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeroComponent } from './app-hero.component';

describe('AppHeroComponent', () => {
  let component: AppHeroComponent;
  let fixture: ComponentFixture<AppHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppHeroComponent]
    });
    fixture = TestBed.createComponent(AppHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

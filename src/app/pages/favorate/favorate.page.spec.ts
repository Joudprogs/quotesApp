import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoratePage } from './favorate.page';

describe('FavoratePage', () => {
  let component: FavoratePage;
  let fixture: ComponentFixture<FavoratePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

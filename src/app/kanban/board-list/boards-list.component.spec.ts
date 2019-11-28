import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsListComponent } from './boards-list.component';

describe('BoardListComponent', () => {
  let component: BoardsListComponent;
  let fixture: ComponentFixture<BoardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardsListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

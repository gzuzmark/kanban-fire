import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { BoardsListComponent } from './board-list/boards-list.component';
import { BoardComponent } from './board/board.component';
import { KanbanRoutingModule } from './kanban-routing.module';
import { BoardDialogComponent } from './dialogs/board-dialog.component';
import { TaskDialogComponent } from './dialogs/task-dialog.component';

@NgModule({
  declarations: [
    BoardsListComponent,
    BoardComponent,
    BoardDialogComponent,
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    SharedModule,
    FormsModule,
    DragDropModule,
    MatButtonToggleModule,
    MatDialogModule
  ],
  entryComponents: [BoardDialogComponent, TaskDialogComponent]
})
export class KanbanModule {}

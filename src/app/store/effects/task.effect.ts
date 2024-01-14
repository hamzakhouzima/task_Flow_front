import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import * as TaskActions from '../actions/task.action';
import { TaskService } from '../../services/task/task.service';
import {of} from "rxjs";

@Injectable()
export class TaskEffects {

  constructor(private actions$: Actions, private taskService: TaskService) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      mergeMap(() =>
        this.taskService.getTasks().pipe(
          map((tasks) => TaskActions.loadTasksSuccess({ tasks }))
        )
      )
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.addTask),
      mergeMap((action) =>
        this.taskService.createTask(action.payload).pipe(
          map((newTask) => TaskActions.addTaskSuccess({ newTask })),
          catchError((error) => of(TaskActions.addTaskFailure({ error })))
        )
      )
    )
  );


}

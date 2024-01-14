import { createAction, props } from '@ngrx/store';
import {Task} from "../../models/task/task.module";



export const TaskActions = {
  addTask: createAction('[Task] Add Task', props<{ description: string, dueDate?: Date, priority?: number }>()),
  addTaskSuccess: createAction('[Task] Add Task Success', props<{ newTask: Task }>()),
  addTaskFailure: createAction('[Task] Add Task Failure', props<{ error: Error }>()),
  // ... other actions
};

export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction(
  '[Task] Load Tasks Success',
  props<{ tasks: Task[] }>()
);

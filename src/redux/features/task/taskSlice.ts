import type { RootState } from "@/redux/store";
import type { ITask } from "@/types/type.task";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState{
    tasks: ITask[],
    filter: 'all' | 'high' | 'medium' | 'low'
}

const initialTask: InitialState = {
    tasks: [
        {
            id: '1',
            title: 'task title',
            description: 'task description',
            dueDate: '2025-11-05',
            isCompleted: false,
            priority: 'low'
        },
        {
            id: '2',
            title: 'task title 2',
            description: 'task description 2',
            dueDate: '2025-11-05',
            isCompleted: false,
            priority: 'medium'
        },
         {
            id: '3',
            title: 'task title 3',
            description: 'task description 2',
            dueDate: '2025-11-05',
            isCompleted: false,
            priority: 'high'
        }
    ],
    filter: 'all'
}

const taskSlice = createSlice({
    name: 'task',
    initialState: initialTask,
    reducers: {
        createTask: () => {

        },
        readTask: () => {

        },
        updateTask: () => {

        },
        deleteTask: () => {

        }
    }
})

export const selectTask = (state: RootState) => {
    return state.todo.tasks
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter
}
export const { createTask, readTask, updateTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer
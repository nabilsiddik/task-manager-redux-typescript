import type { RootState } from "@/redux/store";
import type { ITask } from "@/types/type.task";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState{
    tasks: ITask[],
    filter: 'all' | 'high' | 'medium' | 'low'
}

const initialTask: InitialState = {
    tasks: [],
    filter: 'all'
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">

// Create task with id and isCompleted
const createTask = (taskData: DraftTask): ITask => {
    return {id: nanoid(), isCompleted: false, ...taskData}
}

const taskSlice = createSlice({
    name: 'task',
    initialState: initialTask,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
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
export const { addTask, readTask, updateTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer
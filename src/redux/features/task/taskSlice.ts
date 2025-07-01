import type { RootState } from "@/redux/store";
import type { ITask } from "@/types/type.task";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[],
    filter: 'all' | 'high' | 'medium' | 'low'
}

const initialTask: InitialState = {
    tasks: [
        {
            id: '1',
            title: 'Title',
            description: 'Description',
            dueDate: '13 jan 2025',
            isCompleted: false,
            priority: 'high',
        }
    ],
    filter: 'all'
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">

// Create task with id and isCompleted
const createTask = (taskData: DraftTask): ITask => {
    return { id: nanoid(), isCompleted: false, ...taskData }
}

const taskSlice = createSlice({
    name: 'task',
    initialState: initialTask,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) => {
                task.id === action.payload ? task.isCompleted = !task.isCompleted : task
            })
             
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        updateTask: (state, action: PayloadAction<string>) => {

        },
        updateFilter: (state, action: PayloadAction<'low' | 'medium' | 'high'>) => {
            state.filter = action.payload
        }
    }
})

export const selectTask = (state: RootState) => {
    return state.todo.tasks
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter
}
export const { addTask, toggleCompleteState, deleteTask} = taskSlice.actions
export default taskSlice.reducer
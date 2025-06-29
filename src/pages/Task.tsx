import AddTaskModal from "@/components/AddTaskModal"
import TaskCard from "@/components/TaskCard"
import { selectTask } from "@/redux/features/task/taskSlice"
import { useAppSelector } from "@/redux/hook"

const Task = () => {
    const tasks = useAppSelector(selectTask)
    return (
        <div>
            <div className="mb-10">
                <h1 className="mb-4 text-center font-bold text-3xl mt-10">Add Task</h1>
                <AddTaskModal/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 px-4'>
            {tasks?.length > 0 && tasks.map((task) => {
                return <TaskCard key={task?.id} task={task} />
            })}
        </div>
        </div>
    )
}

export default Task

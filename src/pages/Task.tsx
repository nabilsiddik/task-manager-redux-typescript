import AddTaskModal from "@/components/AddTaskModal"
import TaskCard from "@/components/TaskCard"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { selectTask, updateFilter } from "@/redux/features/task/taskSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"

const Task = () => {
    const tasks = useAppSelector(selectTask)
    const dispatch = useAppDispatch()
    return (
        <div>
            <div className="mb-10 mt-10">
                <AddTaskModal />
                <div className="flex justify-center mt-5">
                    <Tabs defaultValue="all">
                    <TabsList>
                        <TabsTrigger onClick={() => dispatch(updateFilter('all'))} value="all">All</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('low'))} value="low">Low</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('medium'))} value="medium">Medium</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('high'))} value="high">High</TabsTrigger>
                    </TabsList>
                </Tabs>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 px-4'>
                {tasks?.length > 0 && tasks.map((task, index) => {
                    return <TaskCard key={index} task={task} />
                })}
            </div>
        </div>
    )
}

export default Task

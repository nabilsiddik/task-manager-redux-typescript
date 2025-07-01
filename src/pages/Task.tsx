import AddTaskModal from "@/components/AddTaskModal"
import TaskCard from "@/components/TaskCard"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UpdateTaskModal from "@/components/UpdateTaskModal"
import { selectTask } from "@/redux/features/task/taskSlice"
import { useAppSelector } from "@/redux/hook"
import { useState } from "react"

const Task = () => {
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const tasks = useAppSelector(selectTask)
    return (
        <div>
            <div className="mb-10 mt-10">
                <AddTaskModal />
                <UpdateTaskModal setIsUpdateModalOpen={setIsUpdateModalOpen} isUpdateModalOpen={isUpdateModalOpen} />

                <div className="flex justify-center mt-5">
                    <Tabs>
                    <TabsList>
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                </Tabs>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 px-4'>
                {tasks?.length > 0 && tasks.map((task, index) => {
                    return <TaskCard key={index} task={task} setIsUpdateModalOpen={setIsUpdateModalOpen} isUpdateModalOpen={isUpdateModalOpen} />
                })}
            </div>
        </div>
    )
}

export default Task

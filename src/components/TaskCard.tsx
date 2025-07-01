import { cn } from '@/lib/utils';
import type { ITask } from '@/types/type.task';
import { format } from 'date-fns';
import { Checkbox } from './ui/checkbox';
import { FaTrashAlt } from "react-icons/fa";
import { deleteTask, toggleCompleteState } from '@/redux/features/task/taskSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { FaEdit } from "react-icons/fa";
import { selectAllUsers } from '@/redux/features/user/userSlice';


interface IProps {
  task: ITask,
}


const TaskCard = ({ task}: IProps) => {
 const dispatch = useAppDispatch()
 const users = useAppSelector(selectAllUsers)
 const assignedUser = users.find((user) => user.id === task.assignedTo)

  return (
    <div className={cn('rounded-md p-5 flex items-center justify-between gap-10 bg-secondary border')}>
      <div>
        <h1 className='font-bold text-lg'>{task.title}</h1>
        <p className='text-sm'>{task.description}</p>
        <p className='text-sm'><b>Due Date: </b>{format(new Date(task.dueDate), "PPP")}</p>
        <p className='text-sm'><b>Priority: </b> {task.priority}</p>
        <p className='text-sm'><b>Status: </b> {task.isCompleted ? 'Completed' : 'Incompleted'}</p>
        <p className='text-sm'><b>Assigned To: </b> {assignedUser ? `${assignedUser.firstName} ${assignedUser.lastName}` : 'No one'}</p>
      </div>
      <div className='flex items-center gap-2'>
        <span>
          <FaTrashAlt onClick={() => {
            dispatch(deleteTask(task.id))
          }} className='cursor-pointer' />
        </span>
        <Checkbox onClick={() => {
          dispatch(toggleCompleteState(task.id))
        }} className='cursor-pointe' id="terms" />
        <span>
          <FaEdit className='cursor-pointer' />
        </span>
      </div>
    </div>
  )
}

export default TaskCard

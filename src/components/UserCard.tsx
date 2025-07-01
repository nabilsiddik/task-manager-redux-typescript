import { cn } from '@/lib/utils';
// import type { ITask } from '@/types/type.task';
// import { format } from 'date-fns';
// import { Checkbox } from './ui/checkbox';
// import { FaTrashAlt } from "react-icons/fa";
// import { deleteTask, toggleCompleteState } from '@/redux/features/task/taskSlice';
// import { FaEdit } from "react-icons/fa";

import { useAppDispatch } from '@/redux/hook';
import type { IUser } from '@/types/type.user';


interface IProps {
  user: IUser,
}


const UserCard = ({ user }: IProps) => {

 const dispatch = useAppDispatch()

  return (
    <div className={cn('rounded-md p-5 flex items-center justify-between gap-10 bg-secondary border')}>
      <div>
        <h1 className='font-bold text-lg'>{`${user.firstName} ${user.lastName}`}</h1>
        <p className='text-sm'>Email: {user.email}</p>
      </div>
      {/* <div className='flex items-center gap-2'>
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
      </div> */}
    </div>
  )
}

export default UserCard

import { cn } from '@/lib/utils';
import type { ITask } from '@/types/type.task';

interface IProps {
    task: ITask
}

const TaskCard = ({task}: IProps) => {

  return (
    <div className={cn('rounded-md p-5', {
      'bg-red-600': task.priority === 'low',
      ' bg-amber-500': task.priority === 'medium',
      'bg-green-600':task.priority === 'high',

    })}>
      <h1 className='font-bold text-lg'>{task.title}</h1>
      <p>{task.description}</p>
      <p>{task.dueDate}</p>
      <p>{task.priority}</p>
    </div>
  )
}

export default TaskCard

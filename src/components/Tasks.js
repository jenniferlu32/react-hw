import Task from './Task';

const Tasks = ({ tasks, onDelete, toggle }) => {
  return (
    <ol>
      {
        tasks.map(task => {
          return (
            <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            toggle={toggle}/>
          )
        })
      }
    </ol>
  )
}

export default Tasks;

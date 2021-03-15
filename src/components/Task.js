import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, toggle }) => {
  return (
    <div
    className={ `task ${task.important ? 'important' : '' }`}
    onDoubleClick={() => toggle(task.id)}
    >
      <h3>{ task.task } <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)}/></h3>
      <p>{ task.day } at {task.time}</p>
    </div>
  )
}

export default Task;

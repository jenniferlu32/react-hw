import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  //each input has its own component level state, and function to change state
  const [task, setTask] = useState('') //set default state values
  const [day, setDay] = useState('')
  const [time, setTime] = useState('')
  const [important, setImportance] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      alert('Please add a task');
      return
    }
    onAdd({ task, day, time, important });

    setTask('')
    setDay('')
    setTime('')
    setImportance(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>New Task</label>
        <input type='text'
        placeholder='Write task here.'
        value={task} //reflect state
        onChange={(e) => setTask(e.target.value)} //whatever the user types in
        />
      </div>
      <div>
        <label>Day</label>
        <input
        type='text'
        placeholder='Day'
        value={day}
        onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div>
        <label>Time</label>
        <input
        type='text'
        placeholder='Time'
        value={time}
        onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <label>!Important</label>
        <input
        type='checkbox'
        checked={important} //importance box is checked if important
        value={important}
        onChange={(e) => setImportance(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Add Task'></input>
    </form>
  )
}

export default AddTask;

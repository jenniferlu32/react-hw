import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setState] = useState( //tasks is the state: [{…}, {…}, {…}] and setState is the function to change state
    [
      {id: 1, task: 'Laundry', day: 'Sunday', time: '8:30am', important: true},
      {id: 2, task: 'Call Erica', day: 'Saturday', time: '8:00pm', important: true},
      {id: 3, task: 'React HW', day: 'Saturday', time: '12:00am',important: false}
    ]
  )
  //add another state that shows task form if user wants to add a task
  const [showTask, setShowTask] = useState(false);

  const deleteTask = (id) => { //filter out the task where its ID matches the id passed from Task.js
    setState(tasks.filter((task) => task.id !== id))
  }

  const toggle = (id) => {
    //if task ID matches id passed from Task.js, return the task with its importance state changed
    setState(tasks.map(task => task.id === id ?
      {...task, important: !task.important} : task));
  }

  const onAdd = (task) => { //gets called when user hits 'submit'
    const id = Math.floor(Math.random() * 10)+10;
    const newTask = { id, ...task };
    console.log(newTask);
    setState([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header
      title='To-Do List'
      showTask={() => setShowTask(!showTask) /*pass showTask prop. When called, sets showTask to true*/}
      addOrClose={showTask}
      />
      {showTask && <AddTask onAdd={onAdd}/> /*if showTask is true, then show AddTask */}
      {
        tasks.length > 0 ? <Tasks
        tasks={tasks}
        onDelete={ deleteTask }
        toggle={toggle}
        />
        : 'Congrats!'
      }
    </div>
  );
}

export default App;

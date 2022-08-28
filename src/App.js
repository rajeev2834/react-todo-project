import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Task from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Learn React',
      reminder: true
    },
    {
      id: 2,
      text: 'Learn React Hooks',
      reminder: false
    },
    {
      id: 3,
      text: 'Learn React Router',
      reminder: false
    }]);

    const [showAddTask, setShowAddTask] = useState(false);

    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) +1 ;
      setTasks([...tasks, {id, ...task}]);
    }

    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  }

  return (
    <Router>
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAddTask={addTask}/>}
      {tasks.length > 0 ? 
        <Task tasks={tasks} onDelete = {deleteTask} onToggle= {toggleReminder}/> 
        : <p>You have no tasks</p>}
      <Footer/>
    </div>
    </Router>
  );
}
export default App;

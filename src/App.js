import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Work",
      description: "Push changes to git."
    },
    {
        id: 2,
        title: "Home",
        description: "Wash the plates after eating."
    },
    {
        id: 3,
        title: "Side Project",
        description: "Plan the database schema."
    }  
  ]);

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  }

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => {
        return task.id !== id
      })
    );
  }

  const addTask = (task) => {
    const id = (tasks.length + 1);
    const newTask = {id, ...task};

    // Add the newTask with the current tasks
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
      <Header onClick={toggleAddForm} showAddForm={showAddForm} />
      {showAddForm && <AddTask onAdd={addTask} />}

      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;

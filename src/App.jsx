import { useEffect, useState } from 'react'
import taskService from './services/tasks'
//import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const initialTasks = await taskService.getAll()
      setTasks(initialTasks)
    }
    fetchData()
  }, [])

  return (
    <div>
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.content}</li>
        })}
      </ul>
    </div>
  )
}

export default App

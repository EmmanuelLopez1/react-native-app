import { useState } from 'react';
import {
  View,
} from 'react-native';
import styles from './styles';
import colors from './constants/theme/colors';

// COMPONENTS
import {AddItem, Task, Modal} from './components'


const App = ()=> {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  const handleChange = (value) => {
    setTask(value);
  }
  const onHandleSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task,
        complete:false
      }
    ])
    console.warn(tasks)
  }

  const onHandleModal = (item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedTask(item)
  }

  const deleteTask = ()=>{
    const newTasks= tasks.filter(task=>{
      return task.id !== selectedTask.id
    })
    setTasks(newTasks)
    setIsModalVisible(false)
  }

  const completeTask = ()=>{
    const newTasks= tasks.map(task=>{
      if(task.id === selectedTask.id){
        return {
          ...task,
          complete:!task.complete
        }
      }
      return task
    })
    setTasks(newTasks)
    setIsModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <AddItem 
        placeholder='Add item' 
        buttonText='Add'
        buttonColor={colors.primary}
        handleChange={handleChange}
        onHandleSubmit={onHandleSubmit}
        task={task}
      />
      <Task tasks={tasks} onHandleModal={onHandleModal}/>
      <Modal 
        isModalVisible={isModalVisible} 
        setIsModalVisible={setIsModalVisible}
        task={task}
        deleteTask={deleteTask}
        completeTask={completeTask}
        />
    </View>
  );
}

export default App;
import { 
  MainTasks, 
  Button, 
  ButtonCreateTask, 
  HeaderTask,
  TasksContainer
} from "./Main.module";

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import plus from '../assets/plus.png'
import { WithTask } from "./WithTask";
import { WithoutTask } from "./WithoutTask";



export function Main(){

  const [taskList, setTaskList] = useState([]);

  const thereTask = taskList.length

  const endedTask = taskList.filter((task) => task.isComplete) 
  const endedtotal = endedTask.length

  const totalTasks = taskList.length

  const [newTask, setNewTask] = useState([])


  function handleCreateNewTask(event){
    event.preventDefault();
    setTaskList([...taskList, {
      id: uuidv4(),
      title: newTask,
      isComplete: false
    }])
    setNewTask('')
  }

  function handleNewTaskChange (event){
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function deleteTask(taskdelited){
    const delitedTask = taskList.filter((task) => task.id !== taskdelited)
    setTaskList(delitedTask)
  }


  function itsComplete(checkedChanged) {
    const checkIndex = taskList.findIndex((task) => task.id === checkedChanged);
    const allList = [...taskList];
    allList[checkIndex].isComplete = !allList[checkIndex].isComplete;
    setTaskList(allList);
  }


  return(
    
    <TasksContainer>
      <MainTasks>
        <Button onSubmit={handleCreateNewTask}  >
          <textarea 
            type="text" 
            name="inputTask" 
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleNewTaskChange}
          />
          <ButtonCreateTask 
            type='submit' 
          >
              <span>Criar</span>
              <img src={plus} alt=""/>
          </ButtonCreateTask>
        </Button>

        <HeaderTask>
            <p> Tarefas criadas <span>{thereTask}</span></p>
            <p>Concluídas <span> {endedtotal} de {totalTasks} </span></p>
        </HeaderTask>

        { thereTask > 0 ? 
          taskList.map((task,  i) =>{
            return (
            <WithTask
            key={task.id}
            titulo={task.title}
            isComplete={task.isComplete}
            eliminar={task.isDelited}
            deleteTask={() => deleteTask(task.id)}
            itsComplete={() => itsComplete(task.id, task.isComplete )}
            />
          )
          })
          : 
          <WithoutTask/>}

      </MainTasks>
    </TasksContainer>
    

  )
}
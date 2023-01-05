import { NoTask } from './WithoutTask.module'
import clipboard from '../assets/Clipboard.png'

export function WithoutTask(){
  return(
    <NoTask>
      <img src={clipboard}/>
      <h1>Você ainda não tem tarefas cadastradas</h1>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </NoTask>
  )
}
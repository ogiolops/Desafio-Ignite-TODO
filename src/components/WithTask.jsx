import { WithTasks } from "./WithTask.module";
// import trash from "../assets/trash.svg";
import { FaRegTrashAlt } from "react-icons/fa";


export function WithTask(props) {
  return (
    <WithTasks isComplete={props.isComplete}>
      <input onClick={props.itsComplete} type="checkbox"></input>
      <p>{props.titulo}</p>
      <button onClick={props.deleteTask}>
        <FaRegTrashAlt className="trash"/>
      </button>
    </WithTasks>
  );
}

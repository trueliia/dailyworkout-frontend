import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export const MyWorkouts = ({ text, updatingInInput, deleteWorkout}) =>{
    return (<div className="icons">
        <p> { text }</p>
        <AiFillEdit onClick={updatingInInput}></AiFillEdit>
        <AiFillDelete onClick={deleteWorkout}></AiFillDelete>
    </div>
    )
}
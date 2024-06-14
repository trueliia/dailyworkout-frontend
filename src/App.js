import { useState, useEffect } from 'react';
import './App.css';
import { MyWorkouts} from './MyWorkouts';
import { getAllWorkouts, addWorkout, editWorkout, deleteWorkout } from './FetchWorkouts';

function App() {

  const [myWorkout, setWorkout] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const[workoutId, setWorkoutId] = useState("")
  
  useEffect(() => {
    getAllWorkouts(setWorkout)
  }, [])

  const updatingInInput = (_id, title) =>{
    setEditing(true)
    setTitle(title)
    setWorkoutId(_id)
  }
  return (
    <div>
      <h1>WORKOUT PLAN</h1>
      <input 
      type="text"
      placeholder="Add a Workout"
      value = {title}
      onChange = {(e) =>setTitle(e.target.value)}
      />

      <button 
      disabled={!title}
      onClick=
      {editing ? () => editWorkout(workoutId, title, setTitle, setWorkout, setEditing) : () => addWorkout(title, setTitle, setWorkout)}>
      {editing ? "EDIT" : "ADD"}
      </button>
      {/* <MyWorkouts text="WE GOT HERE"/> */}
      {myWorkout.map((workout) => <MyWorkouts text={workout.title} key={workout._id}
      updatingInInput={() => updatingInInput(workout._id, workout.title)}
      deleteWorkout={() => deleteWorkout(workout._id, setWorkout)}/>
    )}
    </div>
  );
}

export default App;

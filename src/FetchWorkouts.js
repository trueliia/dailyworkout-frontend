import axios from 'axios';

const getAllWorkouts = (setWorkout) => {
    axios.get("https://dailyworkout-f1v0.onrender.com")
    .then(({data}) =>{console.log(data)
        setWorkout(data);
    })
}

const addWorkout = (title, setTitle, setWorkout) =>{
    axios.post(`https://dailyworkout-f1v0.onrender.com/saveWorkout`, { title })
    .then((data) =>{
        console.log(data);
        setTitle("");
        getAllWorkouts(setWorkout)
    })
}

const editWorkout = (workoutId, title, setTitle, setWorkout, setEditing) =>{
    axios.put(`https://dailyworkout-f1v0.onrender.com/editWorkout`, { _id: workoutId, title })
    .then((data) =>{
        console.log(data);
        setTitle("");
        setEditing(false);
        getAllWorkouts(setWorkout)
    })
}

const deleteWorkout = (_id, setWorkout) =>{
    axios.post(`https://dailyworkout-f1v0.onrender.com/deleteWorkout`, { _id})
    .then((data) =>{
        console.log(data);
        getAllWorkouts(setWorkout)
    })
}

export { getAllWorkouts, addWorkout, editWorkout, deleteWorkout };
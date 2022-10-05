import { Fragment } from "react";
import axios from "axios";
import EditGoals from "./EditGoals";
// InputGoals let us render the goals from our database to whatever format in HTML we want. In this case in tables with rows. 
// we also get goal from our GoalsItems and the setSubmitGoal from the App.js file this allows to destructure and use the functionality they provide 
const InputGoals = ({goal, setSubmitGoal}) => {
    
    //this handles my delete function 
    const handleDelete = async (e) => {
        try {
            const response = await axios.delete(`http://localhost:5000/goals/${goal.id}`);
            console.log(response)
            setSubmitGoal(true)
        } catch (error) {
            console.log(error.message)
        }
    }

    return <Fragment>
            <tr key={goal.id}>
        <td id='goals-description'>{goal.goals}</td>
            <td><EditGoals goal={goal} setSubmitGoal={setSubmitGoal}/>
            </td>
            <td>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </td>
      </tr>
      </Fragment>
    
  
            
    
    
}

export default InputGoals;
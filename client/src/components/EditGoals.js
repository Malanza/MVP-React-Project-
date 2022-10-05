import React, { Fragment, useState } from "react";
import axios from "axios";

const EditGoals = ( {goal, setSubmitGoal} ) =>{
    const [description, setDescription] = useState(goal.goals);
    // Allows us to make the edit on the input box 
    const handleEdit = (e) =>{
        setDescription(e.target.value)
    }

    const handleEditBox = () => {
        setDescription(goal.goals)
    }

    const updateDescription = async(e) => {
        e.preventDefault();
        try {
          const {data} = await axios.put(`http://localhost:5000/goals/${goal.id}`, {
            goals: description
          })
          console.log(data);
          setSubmitGoal(true);
        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>
       
<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${goal.id}`}>
  Edit
</button>


<div class="modal" 
    id={`id${goal.id}`}
    onClick={handleEditBox}>
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">Edit Goal</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={handleEditBox}>&times;</button>
      </div>

      
      <div class="modal-body">
        <input type='text'className="form-control" value={description} onChange={handleEdit}></input>
      </div>

      
      <div class="modal-footer">
         
         <button type="button" class="btn btn-success" data-dismiss="modal" onClick={e => updateDescription(e)}>Submit</button>
      
        
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={handleEditBox}>Close</button>
      </div>

    </div>
  </div>
</div>
    </Fragment>
}

export default EditGoals;
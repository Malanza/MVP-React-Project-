import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import EditGoals from "./EditGoals";
const ListGoals = () => {
    const [goals, setGoals] = useState([]);
   
    const deleteGoals = async id =>{
        try {
           const deleteGoals = await axios.delete(`http://localhost:5000/goals/${id}`)
           setGoals(goals.filter(goals => goals.id !== id))
        } catch (error) {
            console.log(error.message);
        }
    
    }
   
    const getGoals = async() => {
        try {
          
          const response = await axios.get("http://localhost:5000/goals");  
          setGoals(response.data)
          console.log(response.data);

        } catch (err) {
            console.log(err.response);
        }
    }
    
    useEffect(() =>{
       getGoals(); 
    },[]);
    
    
    
    
    return <Fragment><table className="table mt-5 text-center">
    <thead>
      <tr>
        <th scope="col">Goals</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
        {/* <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr> */}
      {goals.map(goals => (
        <tr key={goals.id}>
        <td>{goals.goals}</td>
        <td>
          <EditGoals goal={goals}/>
        </td>
        <td>
            <button className="btn btn-danger" onClick={() => deleteGoals(goals.id)}>Delete</button>
        </td>
      </tr>
      ))}
    </tbody>
  </table>
  </Fragment>;
};

export default ListGoals;
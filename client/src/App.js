//importing useState, UseEffect, and Fragment allows us to use their functionality from React // 
import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import GoalsItems from './components/GoalsItems';
import SubmitGoals from './components/SubmitGoals'
function App() {
  // This allows us to 
  const [goals, setGoals] = useState([]);
   
  //This allows us to re-render the page // 
   const [submitGoal, setSubmitGoal] = useState(false)
  
  //This use hook allows us to first render our goals from the DB, it takes two things a anonymous callback function and a array    
    useEffect(() => {
      const renderGoals = async () => {
        
        try {
          const response = await axios.get('http://localhost:5000/goals');
          console.log(response.data);
          setGoals(response.data); //this changes the initial state of the useState goals to the data from the DB 
          setSubmitGoal(false)
        
        } catch (error) {
          console.log(error.message);
        }
      }  
      // invoke the renderGoals function to make the get all request 
      renderGoals()
    
    }, [submitGoal])
  
    
  
  
  return (
    <Fragment>
    <h1>My Goals</h1>
    <table className="table mt-5 text-center table table-bordered">
    <thead>
      <tr id='row-inputs'>
        <th scope="col">Goals</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
        <GoalsItems goals={goals} setSubmitGoal={setSubmitGoal}/> 
        </tbody>
  </table>
        <SubmitGoals setSubmitGoal={setSubmitGoal}/>
    </Fragment>
  );
}

export default App;

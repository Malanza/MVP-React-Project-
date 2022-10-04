import React, { Fragment, useState } from "react";
import axios from 'axios'
const InputGoals = () => {
    
    const [goals, setGoals] = useState('');

    const onSubmitform = async (e) =>{
        e.preventDefault();
        try {
           const response = await axios.post("http://localhost:5000/goals",{goals});
           console.log(response.data);
        } catch (err) {
            console.log(err.response);
        }
    }
    
    const handleInput = (e) =>{
        setGoals(e.target.value)
    }
    
    return <Fragment>
        <h1 className="text-center mt-5" id="header">My Goals List</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitform}>
            <input type='text' className="form-control" value={goals} onChange={handleInput}/>
                <button className="btn btn-success">Add</button>
           </form>
        </Fragment>;
};

export default InputGoals
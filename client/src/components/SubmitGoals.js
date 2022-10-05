import { Fragment, useState } from "react";
import axios from "axios";
const SubmitGoals = ({setSubmitGoal}) => {
    // making a setGoals state and having inital value be an empty string 
    const [goals, setGoals] = useState('');
    //onSubmitform makes a post request to our server and changes the setSubmitGoal to true so that page can re-render to show the new goal 
    const onSubmitform = async (e) =>{
        e.preventDefault();
        try {
           const response = await axios.post("http://localhost:5000/goals",{goals});
           console.log(response.data);
           setSubmitGoal(true)     
        } catch (err) {
            console.log(err.response);
        }
    }
    // this changes the initial value to whatever was typed in the input box 
    const handleInput = (e) =>{
        setGoals(e.target.value)
    }
    
    return <Fragment>
        <form className="d-flex mt-5" onSubmit={onSubmitform}>
            <input type='text' className="form-control" value={goals} onChange={handleInput}/>
                <button className="btn btn-success" id="add-btn">Add</button>
           </form>
        </Fragment>;
};

export default SubmitGoals 
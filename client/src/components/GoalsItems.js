import InputGoals from './InputGoals';
//GoalsItems.js uses the map method which is a high order array method one of many that let us create a new array without mutation. 
//With this method were able to pass on props to our InputGoals 
const GoalsItems = ({goals, setSubmitGoal}) => {

    return goals.map(goal => (
        <InputGoals goal={goal} key={goal.id} setSubmitGoal={setSubmitGoal}/>
    ))

}

export default GoalsItems;



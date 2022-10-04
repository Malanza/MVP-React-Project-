import React, { Fragment } from 'react';
import './App.css';

//components 

import InputGoals from './components/InputGoals';
import ListGoals from './components/ListGoals';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputGoals />
        <ListGoals />
      </div>
      
    </Fragment>
  );
}

export default App;

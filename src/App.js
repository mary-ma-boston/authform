import React from 'react';

import Authentication from './components/Authentication';
import './App.css';

function App() {

  const submitHandler = (username, password) => {
    //fetch post to server
  };

  return (
    <Authentication handleSubmit = {submitHandler} />
  );
}

export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Register from './register';

function Navigation(){
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}


const App = () => {
  return (
    <Router>
      <Navigation/>
    </Router>
  );
};

export default App;

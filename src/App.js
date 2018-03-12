import React  from 'react';
import {Route} from 'react-router-dom'
import HomePage from './Component/Pages/HomePage'
import LoginPage from './Component/Pages/LoginPage'


const App=()=>{
  return (
  <div>
    <Route path="/" exact component={HomePage}/>
    <Route path="/Login" exact component={LoginPage}/>
  </div>)
}

export default App;

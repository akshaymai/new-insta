import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
 import './App.css';
import Navbar from './Components/navbar'
import Home from './Components/home'
import Profile from './Components/profile'
import Singup from './Components/singup'
import Singin from './Components/singin'
import Createpost from './Components/createpost'
function App() {
  return (
    <div className="App">
              
        <Router>
        <Navbar />
        <Route exact path="/" component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/singup" component={Singup}></Route>
        <Route path="/singin" component={Singin}></Route>
        <Route path="/createpost" component={Createpost}></Route>
        </Router>
    </div>
  );
}

export default App;

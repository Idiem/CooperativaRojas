import React,{useState} from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Login from './Components/login';
import Inicio from './Components/inicio/inicio';

function App() {
  const [sLogin,setLogin] = useState({
    login:null
  })
  return (
    <Router>
        <Switch>
          <Route path="/app" component={Inicio}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
    </Router>
  );
}
export default App;

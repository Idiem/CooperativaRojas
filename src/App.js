import React,{useState} from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Login from './Components/login';
import Afiliados from './Components/afiliados/afiliado';
import Dashboard from './Components/dashboard';
import Admin from './Components/inicio/admin';

function App() {
  const [estado,setEstado] = useState({
    dash : null
  })
  const cambiarDash = ()=>{
      if(estado.dash){
          setEstado({dash:false})
      }else{
          setEstado({dash:true})
      }
  }   
  return (
    <Router>
        <Switch>
            <Router>
              <div className="xl:h-screen w-full xl:flex">
                  <Dashboard usuario="1" dash={estado.dash}/>
                  <div className="grid w-full h-full xl:w-98p grid-rows-6">
                      <Switch>
                          <Route path='/app/afiliados' render={()=><Afiliados estado={estado} cambiarDash={cambiarDash}/>} ></Route>
                          <Route path='/app'  render={()=><Admin estado={estado} cambiarDash={cambiarDash}/>}></Route>
                      </Switch>
                  </div>
              </div>
          </Router>
          <Route path="/" component={Login}></Route>
        </Switch>
    </Router>
  );
}
export default App;

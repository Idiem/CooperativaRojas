import React,{useState} from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Dashboard from './Components/dashboard';
import Admin from './Components/inicio/admin';
import Afiliados from './Components/afiliados/afiliado';
import Login from './Components/login';

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
        <div className="xl:h-screen w-full xl:flex">
                    <Dashboard usuario="1" dash={estado.dash}/>
                    <div className="grid w-full h-full xl:w-98p grid-rows-6">
                        <Switch>
                            <Route path='/login' component={Login}></Route>
                            <Route path='/app/afiliados' render={()=><Afiliados estado={estado} cambiarDash={cambiarDash}/>} ></Route>
                            <Route path='/'  render={()=><Admin estado={estado} cambiarDash={cambiarDash}/>}></Route>
                        </Switch>
                    </div>
                </div>
      </Router>
  );
}
export default App;

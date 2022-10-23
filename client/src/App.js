import React,{useState,createContext} from 'react'
import {BrowserRouter, Route,Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Register from './components/Register';
import Login from './components/Login';
import Myprofile from './components/Myprofile';

export const store = createContext();

const App = () => {
 const [token,setToken] = useState(null);

  return (
    <div>
    <store.Provider value={[token,setToken]}>
      <BrowserRouter>
        <Nav />
        <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/myprofile' component={Myprofile}></Route>
        </Switch>
      </BrowserRouter>
    </store.Provider>


    </div>
  )
}

export default App
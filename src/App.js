import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import ExpertsSection from './pages/ExpertsSection'
import Register from './pages/Register'
import { Route, Switch } from 'react-router-dom';




function App() {

  return (

    <div>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/expertssection'>
          <ExpertsSection />
        </Route>
      </Switch>
     


    </div>

  );
}

export default App;

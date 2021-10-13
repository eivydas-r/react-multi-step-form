import logo from './logo.svg';
import './App.css';
import Step1 from './Components/Step1/Step1';
import Screen from './Components/Screen/Screen';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Step2 from './Components/Step2/Step2';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/exportActions'
import Step3 from './Components/Step3/Step3';

function App() {
  document.title = "Multi-step Form by Eivydas"

  return (
    // Create Multi step form
    // Step 1: Enter firstName, lastName
    // Step 2: Enter email, phone number
    // Step 3: Enter username, password
    <Router>        
      <Switch>
        <Route exact path="/">
          <Link to="/steps/1">
            <button className="btn btn-success signupBtn">Sign up</button>
          </Link>
        </Route>

        <Route path="/steps/1">
          <Step1/>
        </Route>
        <Route path="/steps/2">
          <Step2/>
        </Route>
        <Route path="/steps/3">
          <Step3/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

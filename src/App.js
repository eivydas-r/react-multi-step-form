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
import HomePage from './Components/HomePage/HomePage';
import LoginHeader from './Components/LoginHeader/LoginHeader';

function App() {
  document.title = "Multi-step Form by Eivydas"

  return (
    // Create Multi step form
    // Step 1: Enter firstName, lastName
    // Step 2: Enter email, phone number
    // Step 3: Enter username, password
    <Router>        
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/steps/1" component={Step1}/>
        <Route path="/steps/2" component={Step2}/>
        <Route path="/steps/3" component={Step3}/>
      </Switch>
    </Router>
  );
}

export default App;

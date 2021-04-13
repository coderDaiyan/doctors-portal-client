import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Appoinment from "./Components/Appointment/Appoinment/Appoinment";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router className="App">
        <Switch>
          <Route path="/dashboard/appointment">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/appointment">
            <Appoinment />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

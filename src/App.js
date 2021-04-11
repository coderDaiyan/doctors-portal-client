import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Appoinment from "./Components/Appointment/Appoinment/Appoinment";
import Home from "./Components/Home/Home/Home";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/appointment">
          <Appoinment />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

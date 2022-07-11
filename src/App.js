import {
  BrowserRouter as Router, Switch,
  Route, Redirect,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;


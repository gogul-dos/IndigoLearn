import { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import WhyChooseUs from "./Components/WhyChooseUs";
import Eligibility from "./Components/Eligibility";
import THingsProvided from "./Components/ThingsProvided";
import Placements from "./Components/Placements";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Why-choose-us" component={WhyChooseUs} />
          <Route exact path="/eligibility" component={Eligibility} />
          <Route exact path="/Things-provided" component={THingsProvided} />
          <Route exact path="/Placements" component={Placements} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

import Bus from './Bus/Bus';
import Hotels from './Hotels';
import Trains from './Trains';
import Header from './Header/Header';
import PageNotFound from './PageNotFound';
import Buslist from './Buslist/Buslist';
import Mybookings from './Mybookings';

class App extends Component {

  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>

            <Route path="/bus" component={Bus} />
            <Route path="/trains" component={Trains} />
            <Route path="/hotels" component={Hotels} />
            <Route path="/hotels" component={Hotels} />
            <Route path="/bus_search/:source/:destination/:doj" component={Buslist} />
            <Route exact path="/" component={Login} />
            <Route path="/pagenotfound" component={PageNotFound} />
            <Route path="/mybookings" component={Mybookings} />
            <Redirect to="/pagenotfound" />
          </Switch>

        </Router>
      </>
    )
  }
}




export default App;




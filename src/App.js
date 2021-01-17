import React, { useEffect } from 'react';
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login/Login";
import { auth } from './Firebase';
import { useStateValue } from './StateProvider/StateProvider';

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //will runs only once when the app component loads.....
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS>>>', authUser);
      if (authUser) {
        //the user just logged in or the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    });
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            {/* Home */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;

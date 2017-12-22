import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Chat from './Chat';

function PrivateRoute ({component: Component, authed, ...rest}) {
    authed = localStorage.getItem('authed');
    console.log(authed);
    return (
      <Route
        {...rest}
        render={(props) => authed
          ? <Component {...props} />
          : <Redirect to={{pathname: '/Signin', state: {from: props.location}}} />}
      />
    )
  }

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { authed: false };
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route path='/Signup' component={Signup}/>
                    <Route path='/Signin' component={Signin}/>
                    <PrivateRoute authed={this.state.authed} path='/Profile' component={Profile}/>
                    <PrivateRoute authed={this.state.authed} path='/Chat' component={Chat}/>
                    <PrivateRoute authed={this.state.authed} path='/Search' component={Search}/>
                    <PrivateRoute authed={this.state.authed} path='/' component={Home}/>
                </Switch>
            </main>
        )
    }
}

export default Main;
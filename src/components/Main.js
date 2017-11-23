import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Signup}/>
                <Route path='/Signin' component={Signin}/>
            </Switch>
        </main>
    )
}

export default Main;
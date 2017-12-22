import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../app.css';
import { combineReducers, createStore } from 'redux';
import { Input, Button } from 'semantic-ui-react';
import {
    usernameChanged,
    passwordChanged,
    loginUser
} from '../actions';
import { sessionService, sessionReducer } from 'redux-react-session';


// Add the sessionReducer
const reducer = combineReducers({
    session: sessionReducer
});
  
  const store = createStore(reducer);
  
  // Init the session service
  sessionService.initSessionService(store, { driver: 'COOKIES' });
  

class Signin extends Component {
    constructor(props) {
        super(props);
    }

    onUsernameChange(e) {
        this.props.usernameChanged(e.target.value);
    }

    onPasswordChange(e) {
        this.props.passwordChanged(e.target.value);
    }

    handleSubmit() {
        const { username, password } = this.props

        this.props.loginUser({ username, password }, this.props.history);
    }

    render() {
        return (
            <div className="ui one column stackable center aligned page grid backGround">
                <div className="column twelve wide sign">
                    <div>
                        <span style={{fontSize: 30}}>Se connecter</span><br/>
                    </div>
                    <Input
                        placeholder="exemple@gmail.com"
                        onChange={this.onUsernameChange.bind(this)}
                        value={this.props.username}
                        className="textField"
                    /><br/>
                    <Input
                        placeholder="********"
                        type="password"
                        onChange={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        className="textField"
                    /><br/>
                    <div className="buttonSign">
                        <Button onClick={this.handleSubmit.bind(this)}>
                            Se connecter
                        </Button>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { username, password } = auth;
    return { username, password };
};

export default connect(mapStateToProps, {
    usernameChanged,
    passwordChanged,
    loginUser
})(Signin);
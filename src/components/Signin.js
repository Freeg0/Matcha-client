import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../app.css';
import { Input, Button } from 'semantic-ui-react';
import {
    usernameChanged,
    passwordChanged,
    loginUser
} from '../actions';

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
            <div className="ui one column stackable center aligned page grid">
                <div className="column twelve wide sign">
                    <div>
                        <span style={{fontSize: 30, Margin: 10}}>Se connecter</span><br/>
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
                    <Button className="buttonn" onClick={this.handleSubmit.bind(this)}>
                        Se connecter
                    </Button>
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
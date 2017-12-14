import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../app.css';
import { Input, Button } from 'semantic-ui-react';
import {
    emailChanged,
    passwordChanged,
    loginUser
} from '../actions';

class Signup extends Component {
    constructor(props) {
        super(props);
    }

    onEmailChange(e) {
        this.props.emailChanged(e.target.value);
    }

    onPasswordChange(e) {
        this.props.passwordChanged(e.target.value);
    }

    handleSubmit() {
        const { email, password } = this.props

        this.props.loginUser({ email, password }, this.props.history);
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
                        onChange={this.onEmailChange.bind(this)}
                        value={this.props.firstname}
                        className="textField"
                    /><br/>
                    <Input
                        placeholder="********"
                        type="password"
                        onChange={this.onPasswordChange.bind(this)}
                        value={this.props.firstname}
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
    const { email, password } = auth;
    return { email, password };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(Signup);
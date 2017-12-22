import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react'
import '../app.css';
import {
    usernameChanged,
    lastnameChanged,
    firstnameChanged,
    emailChanged,
    passwordChanged,
    confirmPasswordChanged,
    registerUser
} from '../actions';

class Signup extends Component {
    constructor(props) {
        super(props);
    }

    onUsernameChange(e) {
        this.props.usernameChanged(e.target.value);
    }

    onLastnameChange(e) {
        this.props.lastnameChanged(e.target.value);
    }

    onFirstnameChange(e) {
        this.props.firstnameChanged(e.target.value);
    }

    onEmailChange(e) {
        this.props.emailChanged(e.target.value);
    }

    onPasswordChange(e) {
        this.props.passwordChanged(e.target.value);
    }

    onConfirmPasswordChange(e) {
        this.props.confirmPasswordChanged(e.target.value);
    }

    handleSubmit() {
        const { username, lastname, firstname, email, password, confirmPassword } = this.props

        this.props.registerUser({ username, lastname, firstname, email, password, confirmPassword }, this.props.history);
    }

    render() {
        return (
            <div className="ui one column stackable center aligned page grid backGround">
                <div className="column twelve wide sign">
                    <div>
                        <span style={{fontSize: 30}}>S'inscrire</span><br/>
                    </div>
                    <Input
                        placeholder="Nom d'utilisateur"
                        onChange={this.onUsernameChange.bind(this)}
                        value={this.props.username}
                        className="textField"
                    /><br/>
                    <Input
                        placeholder="Doe"
                        onChange={this.onLastnameChange.bind(this)}
                        value={this.props.lastname}
                        className="textField"
                    /><br/>
                    <Input
                        placeholder="John"
                        onChange={this.onFirstnameChange.bind(this)}
                        value={this.props.firstname}
                        className="textField"
                    /><br/>
                    <Input
                        placeholder="exemple@gmail.com"
                        onChange={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        className="textField"
                    /><br/>
                    <Input
                        placeholder="********"
                        type="password"
                        onChange={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        className="textField"
                    /><br/>
                    <Input
                        placeholder="********"
                        type="password"
                        onChange={this.onConfirmPasswordChange.bind(this)}
                        value={this.props.confirmPassword}
                        className="textField"
                    /><br/>
                    <div className="buttonSign">
                        <Button className="buttonn" onClick={this.handleSubmit.bind(this)}>
                            S'inscrire
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({ auth }) => {
    const { username, lastname, firstname, email, password, confirmPassword } = auth;
    return { username, lastname, firstname, email, password, confirmPassword };
};

export default connect(mapStateToProps, {
    usernameChanged,
    lastnameChanged,
    firstnameChanged,
    emailChanged,
    passwordChanged,
    confirmPasswordChanged,
    registerUser
})(Signup);
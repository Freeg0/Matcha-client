import React, { Component } from 'react';
import '../app.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';

class Header extends Component {
    render() {
        let authed = localStorage.getItem('authed');
        console.log(authed);
        console.log('caca')
        if (authed === true) {
            return (
                <Menu>
                    <Menu.Item as={Link} to='/'><span>Matcha</span></Menu.Item>
                    <Menu.Menu position='right'>
                        Bonjour tete de bite
                    </Menu.Menu>
                </Menu>
            )
        }
        return(
            <Menu>
                <Menu.Item as={Link} to='/'><span>Matcha</span></Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as={Link} to='/Signup'>
                        Sign up
                    </Menu.Item>

                    <Menu.Item as={Link} to='/Signin'>
                        Log-in
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Header;
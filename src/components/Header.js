import React, { Component } from 'react';
import '../app.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';
import { logoutUser } from '../actions';

const Header = () => (
    localStorage.getItem('authed') ? (
        <Menu>
            <Menu.Item as={Link} to='/'><span>Matcha</span></Menu.Item>
            <Menu.Menu position='right'>
                Bonjour, 
            </Menu.Menu>

            <Menu.Item as={Link} to='/Signin' onClick={this.logoutUser()}>
                Logout
            </Menu.Item>
        </Menu>
    ) : (
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
)

// export default Header;

export default connect(null, {
    logoutUser
})(Header);
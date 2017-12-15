import React, { Component } from 'react';
import '../app.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Label, Menu, Button, Dropdown } from 'semantic-ui-react';
import { logoutUser } from '../actions';

const trigger = (
    <span>
      <Icon name='user' /> Hello, Bob
    </span>
  )
  
  const options = [
    {
      key: 'user',
      text: <span>Signed in as <strong>Bob Smith</strong></span>,
      disabled: true,
    },
    { key: 'profile', text: 'Your Profile' },
    { key: 'stars', text: 'Your Stars' },
    { key: 'explore', text: 'Explore' },
    { key: 'integrations', text: 'Integrations' },
    { key: 'help', text: 'Help' },
    { key: 'settings', text: 'Settings' },
    { key: 'sign-out', text: 'Sign Out' },
  ]

const Header = () => (
    localStorage.getItem('authed') ? (
        <Menu>
            <Menu.Item as={Link} to='/'><span>Matcha</span></Menu.Item>
            <Menu.Item position='right' as='a'>
                <Icon name='mail' /> Messages
                <Label color='red' floating>22</Label>
            </Menu.Item>
            <Menu.Item position='right' as='a'>
                <Icon name='users' /> Friends
                <Label color='teal' floating>22</Label>
            </Menu.Item>
            <Menu.Item position='right' as='a'>
                <Icon name='alarm' /> Notifs
                <Label circular size='mini' color='blue' floating>2</Label>
            </Menu.Item>
            <Menu.Menu position='right'>
                Bonjour, 
            </Menu.Menu>

            <Dropdown trigger={trigger} options={options} />
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
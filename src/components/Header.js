import React, { Component } from 'react';
import '../app.css';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';

class Header extends Component {
    render() {
        return(
            <Menu>
                <Menu.Item as={Link} to='/'><span>Matcha</span></Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as={Link} to='/'>
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
import React, { Component } from 'react';
import '../app.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';
import { logoutUser } from '../actions';

// function logout(logoutUser) {
//     localStorage.clear();

//     this.logoutUser;
// }

class Header extends Component {
    handlerUpdate() {
        this.props.logoutUser();
        window.location.reload();
    }

    render() {
        if (localStorage.getItem('authed')) {
            return (
                <Menu>
                    <Menu.Item as={Link} to='/'><span>Matcha</span></Menu.Item>
                    <Menu.Menu position='right'>
                        Bonjour, 
                    </Menu.Menu>

                    <Menu.Item as={Link} to='/Signin' onClick={this.handlerUpdate.bind(this)}>
                        Logout
                    </Menu.Item>
                </Menu>
            )} else { 
            return (
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
}

// const Header = props => (
//     localStorage.getItem('authed') ? (
//         <Menu>
//             <Menu.Item as={Link} to='/'><span>Matcha</span></Menu.Item>
//             <Menu.Menu position='right'>
//                 Bonjour, 
//             </Menu.Menu>

//             <Menu.Item as={Link} to='/Signin' onClick={props.logoutUser}>
//                 Logout
//             </Menu.Item>
//         </Menu>
//     ) : (
//         <Menu>
//             <Menu.Item as={Link} to='/'><span>Matcha</span></Menu.Item>
//             <Menu.Menu position='right'>
//                 <Menu.Item as={Link} to='/Signup'>
//                     Sign up
//                 </Menu.Item>
        
//                 <Menu.Item as={Link} to='/Signin'>
//                     Log-in
//                 </Menu.Item>
//             </Menu.Menu>
//         </Menu>
//     )
// )

export default connect(null, {logoutUser})(Header);
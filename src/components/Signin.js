import React, { Component } from 'react';
import '../app.css';

const Signin = () => {
    return (
        <div class="ui one column stackable center aligned page grid">
            <div class="column twelve wide sign">
                <div>
                    <span style={{fontSize: 30}}>Se connecter</span><br/>
                </div>
                <input
                    placeholder="exemple@gmail.com"
                    className="textField"
                /><br/>
                <input
                    placeholder="********"
                    type="password"
                    className="textField"
                /><br/>
                <button>
                    Se connecter
                </button>
            </div>
        </div>
    );
}

export default Signin;
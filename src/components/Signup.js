import React, { Component } from 'react';
import '../app.css';

const Signup = () => {
    return (
        <div class="ui one column stackable center aligned page grid">
            <div class="column twelve wide sign">
                <div>
                    <span style={{fontSize: 30}}>S'inscrire</span><br/>
                </div>
                <input
                    label="Nom d'utilisateur"
                    placeholder="Nom d'utilisateur"
                    className="textField"
                /><br/>
                <input
                    label="Nom"
                    placeholder="Doe"
                    className="textField"
                /><br/>
                <input
                    label="Prénom"
                    placeholder="John"
                    className="textField"
                /><br/>
                <input
                    label="Adresse email"
                    placeholder="exemple@gmail.com"
                    className="textField"
                /><br/>
                <input
                    label="Mot de passe"
                    placeholder="********"
                    type="password"
                    className="textField"
                /><br/>
                <input
                    label="Confirmer mot de passe"
                    placeholder="********"
                    className="textField"
                /><br/>
                <button>
                    S'inscrire
                </button>
            </div>
        </div>
    );
}

export default Signup;
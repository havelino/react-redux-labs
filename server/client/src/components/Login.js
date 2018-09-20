import React, { Component } from 'react';

const inputStyle = {
    fontSize: '40px',
    textAlign: 'center'
};

class Login extends Component {

    render() {
        return (
            <div>
                <h1 style = {inputStyle} >Log in</h1>
                <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--3-col"></div>
                    <div class="mdl-cell mdl-cell--3-col">
                        <label for="sample2">Email</label>
                        <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample2"></input>
                        <span class="mdl-textfield__error">Input is not a number!</span>
                    </div>
                    <div class="mdl-cell mdl-cell--3-col">
                        <label  for="sample2">Password</label>
                        <input class="mdl-textfield__input" type="password" pattern="-?[0-9]*(\.[0-9]+)?" id="sample2"></input>

                        <span class="mdl-textfield__error">Input is not a number!</span>
                    </div>
                    <div class="mdl-cell mdl-cell--3-col"></div>
                </div>
                <br></br>
                <button type="button" value="Login">Login</button>
            </div>
        );
    }
}

export default Login;
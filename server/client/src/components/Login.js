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
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--3-col">
                        <label htmlFor="sample2">Email</label>
                        <input className="mdl-textfield__input" type="text"  id="email"></input>
                        <span className="mdl-textfield__error">Input is not a number!</span>
                    </div>
                    <div className="mdl-cell mdl-cell--3-col">
                        <label  htmlFor="sample2">Password</label>
                        <input className="mdl-textfield__input" type="password" id="password"></input>

                        <span className="mdl-textfield__error">Input is not a number!</span>
                    </div>
                    <div className="mdl-cell mdl-cell--3-col"></div>
                </div>
                <br></br>
                <button type="button" onClick = {()=>this.props.history.push('/checkout')} > Login</button>
            </div>
        );
    }
}

export default Login;
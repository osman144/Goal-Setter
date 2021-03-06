import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './LoginForm.css'

class LoginForm extends Component {
    constructor () {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/home'
		})
    }
    
    render() {
        if(this.state.redirectTo){
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="mdl-layout mdl-js-layout">
					<main className="mdl-layout__content">
						<div className="mdl-card mdl-shadow--6dp">
							
						<div className="mdl-card__supporting-text">
								<form action="#">
									<div className="mdl-textfield mdl-js-textfield">
										<input className="mdl-textfield__input" type="text" id="username" />
										<label className="mdl-textfield__label" htmlFor="username">Username</label>
									</div>
									<div className="mdl-textfield mdl-js-textfield">
										<input className="mdl-textfield__input" type="password" id="userpass" />
										<label className="mdl-textfield__label" htmlFor="userpass">Password</label>
									</div>
								</form>
							</div>
							<div className="mdl-card__actions mdl-card--border">
								<button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Log in</button>
								<button id="sign-up" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Sign up</button>
							</div>
						</div>
					</main>
				</div>
            )
        }
    }
};

export default LoginForm;
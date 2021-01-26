import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email or Username</label>
                    <input type="text" className="form-control" id="email" placeholder="Email or Username" autoComplete="off" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" autoComplete="off" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}

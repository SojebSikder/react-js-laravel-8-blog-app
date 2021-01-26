import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Username" autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" autoComplete="off" />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}

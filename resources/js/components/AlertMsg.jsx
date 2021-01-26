import React, { Component } from 'react'

export default class AlertMsg extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>

                <div className={"alert alert-"+this.props.type +" alert-dismissible fade show"} role="alert">
                    {this.props.msg}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button>
                </div>

            </div>
        );
    }
}

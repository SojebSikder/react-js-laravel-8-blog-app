import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Config from '../classes/Config';

export default class Home extends Component {

    constructor(){
        super();
        this.state = {
            blogs:[],
        }
    }

    componentDidMount(){
        axios.get(Config.getUrl()+"/")
        .then(response=>{
            this.setState({blogs: response.data});
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                {
                    
                    this.state.blogs.map(blog=>{
                        return(
                            <div key={blog.id}>
                                <div className="card mx-auto" style={{width: '18rem'}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{blog.title}</h5>
                                        <p className="card-text">{blog.description}</p>
                                        <Link to={'/blog/'+blog.id} className="btn btn-primary">Read more</Link>
                                    </div>
                                </div>
                                <br />
                            </div>
                            
                        );
                    })
                }
                </div>

            </div>
        );
    }
}



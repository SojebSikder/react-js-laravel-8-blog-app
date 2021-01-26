import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Config from '../classes/Config';
import Pagination from 'react-js-pagination';

export default class Home extends Component {

    constructor(){
        super();
        this.state = {
            blogs:[],

            //Pagination variables
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:3
        }
    }

    componentDidMount(){
        axios.get(Config.getUrl()+"/")
        .then(response=>{
            this.setState({
                blogs: response.data.data,
                
                itemsCountPerPage:response.data.per_page,
                totalItemsCount:response.data.total,
                activePage:response.data.current_page
            });
        });
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        //this.setState({activePage: pageNumber});

        axios.get(Config.getUrl()+"/category?page="+pageNumber)
        .then(response=>{
            this.setState({
                categories:response.data.data,
                itemsCountPerPage:response.data.per_page,
                totalItemsCount:response.data.total,
                activePage:response.data.current_page
            });
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

                    <div className="d-flex justify-content-center">
                        <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        onChange={this.handlePageChange.bind(this)}
                        itemClass='page-item'
                        linkClass='page-link'
                        />
                    </div>

                </div>
            </div>
        );
    }
}



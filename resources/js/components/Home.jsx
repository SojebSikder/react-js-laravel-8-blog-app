import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Pagination from 'react-js-pagination';
import { Button } from '@material-ui/core';
import Config from '../classes/Config';


export default function Home() {

    const [blogs, setBlogs] = useState([]);

    const [activePage, setActivePage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(1);
    const [totalItemsCount, setTotalItemsCount] = useState(1);
    const [pageRangeDisplayed, setPageRangeDisplayed] = useState(3);



    // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    
    axios.get(Config.getUrl()+"/")
        .then(response=>{

            setBlogs(response.data.data);

            setActivePage(response.data.current_page);
            setItemsCountPerPage(response.data.per_page);
            setTotalItemsCount(response.data.total);
        }).catch((error)=>{
            console.log(error);
        });


    return function cleanup() {

    };

  });



    // For pagination
    const handlePageChange =(e)=> {
        console.log(`active page is ${e.target.value}`);
        //this.setState({activePage: pageNumber});

        axios.get(Config.getUrl()+"/category?page="+e.target.value)
        .then(response=>{

            setActivePage(response.data.current_page);
            setItemsCountPerPage(response.data.per_page);
            setTotalItemsCount(response.data.total);

        }).catch((error)=>{
            console.log(error);
        });
    }



    
    return (
        <div>
            <div className="container">
            {
                blogs.map(blog=>{
                    return(
                        <div key={blog.id}>
                            <div className="card mx-auto" style={{width: '18rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text">{blog.description}</p>
                                    
                                    <Button  variant="contained" color="primary" component={Link} to={'/blog/'+blog.id}>Read more</Button>
                                </div>
                            </div>
                            <br />
                        </div>
                        
                    );
                })
            }

                <div className="d-flex justify-content-center">
                    <Pagination
                    activePage={activePage}
                    itemsCountPerPage={itemsCountPerPage}
                    totalItemsCount={totalItemsCount}
                    pageRangeDisplayed={pageRangeDisplayed}
                    onChange={handlePageChange}
                    itemClass='page-item'
                    linkClass='page-link'
                    />
                </div>

            </div>
        </div>
        );

    
}





/*
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

    // For pagination
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
                                       
                                        <Button  variant="contained" color="primary" component={Link} to={'/blog/'+blog.id}>Read more</Button>
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
*/



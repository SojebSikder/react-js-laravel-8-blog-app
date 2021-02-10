import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Pagination from 'react-js-pagination';
import { Button } from '@material-ui/core';
import Config from '../classes/Config';
import BlogCard from './BlogCard';


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

  }, []);




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

                            <BlogCard 
                            key={blog.id} 
                            title={blog.title} 
                            description={blog.description.length > 400 ? blog.description.substr(1, 400)+  " ....." : blog.description} 
                            link={'/blog/'+blog.id}
                            />

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





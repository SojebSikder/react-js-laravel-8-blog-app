import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Config from '../classes/Config';
import BlogCardSingle from './BlogCardSingle';
import LoadingBar from './LoadingBar';

// Material ui
import { Container, CssBaseline, } from '@material-ui/core';



export default function BlogDetails(props) {

    // Hooks
    const [blog, setBlog] = useState([]);

    // Methods
    useEffect(() => {
        axios.get(Config.getUrl()+"/blog/"+props.match.params.id)
        .then(response=>{
            setBlog(response.data);
        });
    }, []);



    // Show loading bar until data loading finished
    if(blog.length == 0){
        return(
        <Container component="main" maxWidth="lg">
            <br />
            <CssBaseline />

            <LoadingBar />

        </Container>
        );
    }else
    return (
        <Container component="main" maxWidth="lg">
            <br />
            <CssBaseline />

            <BlogCardSingle
            image={ Config.getBase() + '/images/' + blog.image}
            alt={blog.title} 
            title={blog.title} 
            description={blog.description} 
            link={'/blog/'+blog.id}
            />

        </Container>
    );
}























// export default class BlogDetails extends Component {
//     constructor(){
//         super();
//         this.state = {
//             blog: [],
//         }
//     }

//     componentDidMount(){
//         axios.get(Config.getUrl()+"/blog/"+this.props.match.params.id)
//         .then(response=>{
//             this.setState({
//                 blog: response.data
//             });
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <div key={this.state.blog.id}>
//                     <div className="card mx-auto" style={{width: '18rem'}}>
//                         <div className="card-body">
//                             <h5 className="card-title">{this.state.blog.title}</h5>
//                             <p className="card-text">{this.state.blog.description}</p>
//                         </div>
//                     </div>
//                     <br />
//                 </div>
//             </div>
//         )
//     }
// }

import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Config from '../classes/Config';


export default function BlogDetails(props) {

    // Hooks
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        axios.get(Config.getUrl()+"/blog/"+props.match.params.id)
        .then(response=>{
            setBlog(response.data);
        });
    }, []);


    return (
        <div>
            <div key={blog.id}>
                <div className="card mx-auto" style={{width: '50%'}}>
                    <div className="card-body">
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">{blog.description}</p>
                    </div>
                </div>
                <br />
            </div>
        </div>
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

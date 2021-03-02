import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// actions
import { listPosts, setPostDefaults } from '../../../store/actions/PostActions';

// partials
import Breadcrumb from '../../partials/Breadcrumb';
import Spinner from '../../partials/Spinner';
import Pagination from '../../partials/Pagination';
import SuccessAlert from '../../partials/SuccessAlert';
import ErrorAlert from '../../partials/ErrorAlert';
import Row from './Row';

function Index(props) {

    useEffect(() => {
        props.setPostDefaults();
        props.listPosts(1);
    }, [])


    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Posts
                    </h1>

                <Breadcrumb />

            </section>

            <section className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">All posts</h3>

                                <Link to='/posts/add' className="btn btn-primary pull-right">Add <i className="fa fa-plus"></i></Link>
                            </div>
                            <div className="box-body">
                                <Spinner show={props.post.list_spinner} />

                                <SuccessAlert msg={props.post.success_message} />
                                <ErrorAlert msg={props.post.error_message} />

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Image</th>
                                            <th>Published</th>
                                            <th>Category</th>
                                            <th>User</th>
                                            <th width="15%">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            props.post.posts.data ? (
                                                props.post.posts.data.map(item => <Row key={item.id} post={item} />)
                                            ) : null
                                        }
                                    </tbody>
                                </table>
                            </div>

                            <Pagination data={props.post.posts} onclick={props.listPosts.bind(this)} />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {

    return {
        post: state.post
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        listPosts: (page) => dispatch(listPosts(page)),
        setPostDefaults: () => dispatch(setPostDefaults())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
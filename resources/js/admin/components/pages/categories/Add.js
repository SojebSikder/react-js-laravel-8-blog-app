import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// partials
import Breadcrumb from '../../partials/Breadcrumb';
import CategoryForm from './CategoryForm';

// actions
import { addCategory, setCategoryDefaults, handleCategoryTitle } from '../../../store/actions/CategoryActions';


function Add(props) {

    useEffect(() => {
        props.setCategoryDefaults();
    }, [])



    const handleChange = (e) => {
        e.preventDefault();

        props.handleTitleChange(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.addCategory(props.categories.category.title, function () {

            // reset title
            props.handleTitleChange('');

            // redirect
            setTimeout(() => props.history.push('/admin/categories'), 2000);
        });
    }


    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Add category
                    </h1>

                <Breadcrumb />

            </section>

            <section className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box box-warning">
                            <div className="box-header with-border">
                                <h3 className="box-title">Add category</h3>

                                <Link to='/admin/categories' className="btn btn-warning btn-sm"><i className="fa fa-arrow-left"></i> Return back</Link>
                            </div>
                            <form role="form" method="post" onSubmit={handleSubmit}>

                                <div className="box-body">
                                    <CategoryForm categories={props.categories} onchange={handleChange} />
                                </div>
                                <div className="box-footer">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.category
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleTitleChange: (title) => dispatch(handleCategoryTitle(title)),
        addCategory: (title, cb) => dispatch(addCategory(title, cb)),
        setCategoryDefaults: () => dispatch(setCategoryDefaults())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
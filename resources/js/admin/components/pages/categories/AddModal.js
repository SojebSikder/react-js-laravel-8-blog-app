import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    addCategory, setCategoryDefaults, handleCategoryTitle,
    listAllCategories
} from '../../../store/actions/CategoryActions';
import CategoryForm from './CategoryForm';


function AddModal(props) {

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

            setTimeout(() => {
                // close modal
                props.close_modal();

                // reset defaults
                props.setCategoryDefaults();

                // refetch categories
                props.listAllCategories();

            }, 2000);
        });
    }

    return (
        <div className={`modal fade` + (props.show_modal == true ? ' in' : '')} style={{ display: (props.show_modal == true ? 'block' : 'none') }} id="modal-default">
            <div className="modal-dialog">
                <form role="form" method="post" onSubmit={handleSubmit}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" aria-label="Close" onClick={props.close_modal}>
                                <span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Add new category</h4>
                        </div>
                        <div className="modal-body">
                            <CategoryForm categories={props.categories} onchange={handleChange} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default pull-left" onClick={props.close_modal}>Close</button>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
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
        setCategoryDefaults: () => dispatch(setCategoryDefaults()),
        listAllCategories: () => dispatch(listAllCategories()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
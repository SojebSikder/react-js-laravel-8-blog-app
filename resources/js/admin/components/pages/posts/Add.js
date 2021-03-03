import React, { useState, useEffect, createRef } from 'react';
import { connect } from 'react-redux';

// style
import '../../../css/editor.css';

// partials
import Breadcrumb from '../../partials/Breadcrumb';
import { AddModal as AddCategoryModal } from '../categories/AddModal';
import { AddModal as AddTagModal } from '../tags/AddModal';

import PostForm from './PostForm';
// actions
import { listAllCategories } from '../../../store/actions/CategoryActions';
import { listAllTags } from '../../../store/actions/TagActions';
import { handleFieldChange, addPost, setPostDefaults, resetFields } from '../../../store/actions/PostActions';



function Add(props) {

    // Hooks
    const [show_add_category_modal, setShow_add_category_modal] = useState(false);
    const [show_add_tag_modal, setShow_add_tag_modal] = useState(false);

    const submitRef = createRef();


    useEffect(() => {

        props.setPostDefaults();

        props.resetFields();

        props.listAllCategories();

        props.listAllTags();
    }, [])


    const openAddCategoryModal = () => {
        setShow_add_category_modal(true);
    }

    const closeAddCategoryModal = () => {
        setShow_add_category_modal(false);
    }

    const openAddTagModal = () => {
        setShow_add_tag_modal(true);
    }

    const closeAddTagModal = () => {
        setShow_add_tag_modal(false);
    }

    const handleFieldChange = (e) => {
        if (e.target.name == 'tag[]') {
            props.handleFieldChange(e.target.name, e.target.value, e.target.checked);
        } else if (e.target.name == 'image') {
            props.handleFieldChange(e.target.name, e.target.files[0]);
        } else {
            props.handleFieldChange(e.target.name, e.target.value);
        }
    }

    const handleCkeditorChange = (editor) => {
        props.handleFieldChange("content", editor.getData());
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        props.addPost(props.post.post, function () {

            // reset fields
            props.resetFields();

            // redirect
            setTimeout(() => props.history.push('/admin/posts'), 2000);
        });
    }

    const handleSave = (e) => {
        e.preventDefault();

        props.handleFieldChange('published', e.target.name == 'publish' ? 1 : 2);

        setTimeout(() => submitRef.current.click(), 200);
    }

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>Add Post</h1>

                <Breadcrumb />

            </section>

            <section className="content">
                <div className="row">
                    <form method="post" role="form" onSubmit={handleSubmit}>

                        <PostForm
                            post={props.post.post} create_update_spinner={props.post.create_update_spinner}
                            success_message={props.post.success_message} error_message={props.post.error_message}
                            handleFieldChange={handleFieldChange} handleCkeditorChange={(event, editor) => handleCkeditorChange(editor)}
                            all_categories={props.all_categories} all_tags={props.all_tags} openAddCategoryModal={openAddCategoryModal}
                            openAddTagModal={openAddTagModal} handleSave={handleSave} submitRef={submitRef}
                            validation_errors={props.post.validation_errors}
                        />

                    </form>
                </div>
            </section>

            <AddCategoryModal show_modal={show_add_category_modal} close_modal={closeAddCategoryModal} />

            <AddTagModal show_modal={show_add_tag_modal} close_modal={closeAddTagModal} />

        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        all_categories: state.category.all_categories,
        all_tags: state.tag.all_tags,
        post: state.post
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        addPost: (payload, cb) => dispatch(addPost(payload, cb)),
        listAllCategories: () => dispatch(listAllCategories()),
        listAllTags: () => dispatch(listAllTags()),
        handleFieldChange: (field, value, checked = null) => dispatch(handleFieldChange(field, value, checked)),
        setPostDefaults: () => dispatch(setPostDefaults()),
        resetFields: () => dispatch(resetFields())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
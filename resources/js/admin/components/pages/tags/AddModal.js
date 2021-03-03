import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    addTag, setTagDefaults, handleTagTitle,
    listAllTags
} from '../../../store/actions/TagActions';
import TagForm from './TagForm';


function AddTagModal(props) {

    useEffect(() => {
        props.setTagDefaults();
    }, [])


    const handleChange = (e) => {
        e.preventDefault();

        props.handleTitleChange(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.addTag(props.tag.tag.title, function () {

            // reset title
            props.handleTitleChange('');

            setTimeout(() => {
                // close modal
                props.close_modal();

                // reset defaults
                props.setTagDefaults();

                // refetch tags
                props.listAllTags();

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
                            <h4 className="modal-title">Add new tag</h4>
                        </div>
                        <div className="modal-body">
                            <TagForm tag={props.tag} onchange={handleChange} />
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
        tag: state.tag
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleTitleChange: (title) => dispatch(handleTagTitle(title)),
        addTag: (title, cb) => dispatch(addTag(title, cb)),
        setTagDefaults: () => dispatch(setTagDefaults()),
        listAllTags: () => dispatch(listAllTags()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTagModal);
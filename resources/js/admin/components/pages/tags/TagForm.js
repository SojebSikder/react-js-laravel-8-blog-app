import React from 'react';
import Spinner from '../../partials/Spinner';
import SuccessAlert from '../../partials/SuccessAlert';
import ErrorAlert from '../../partials/ErrorAlert';

function TagForm(props) {


    return (
        <div>

            <Spinner show={props.tag.create_update_spinner} />
            <SuccessAlert msg={props.tag.success_message} />
            <ErrorAlert msg={props.tag.error_message} />

            <div className="box-body">
                <div className={`form-group ${props.tag.validation_errors != null ? 'has-error' : ''}`}>
                    <label>Tag title</label>
                    <input type="text" className="form-control" placeholder="Tag title" onChange={props.onchange} value={props.tag.tag.title ? props.tag.tag.title : ''} name="title" />
                    {
                        props.tag.validation_errors != null ? (<div className="help-block">{props.tag.validation_errors.title[0]}</div>) : null
                    }
                </div>
            </div>

        </div>
    )
}

export default TagForm;
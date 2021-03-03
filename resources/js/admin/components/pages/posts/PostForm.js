import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
import { Link } from 'react-router-dom';

import Spinner from '../../partials/Spinner';
import SuccessAlert from '../../partials/SuccessAlert';
import ErrorAlert from '../../partials/ErrorAlert';

function PostForm(props) {


    return (
        <div>
            <Spinner show={props.create_update_spinner} />
            <SuccessAlert msg={props.success_message} />
            <ErrorAlert msg={props.error_message} />

            <div className="col-md-8">
                <div className="box box-warning">
                    <div className="box-header with-border">
                        <h3 className="box-title">{props.post.id != "" ? 'Edit post #' + props.post.id : 'Add post'}</h3>

                        <Link to='/admin/posts' className="btn btn-warning btn-sm pull-right"><i className="fa fa-arrow-left"></i> Return back</Link>
                    </div>
                    <div className="box-body">
                        <div className={`form-group ${props.validation_errors.title ? 'has-error' : ''}`}>
                            <label>Post title</label>
                            <input type="text" className="form-control" placeholder="Post title" onChange={props.handleFieldChange} value={props.post.title ? props.post.title : ''} name="title" />
                            {
                                props.validation_errors.title != null ? (<div className="help-block">{props.validation_errors.title[0]}</div>) : null
                            }
                        </div>
                        <div className={`form-group ${props.validation_errors.content ? 'has-error' : ''}`}>
                            <label>Content</label>
                            <CKEditor
                                name="content"
                                editor={ClassicEditor}
                                data={props.post.content ? props.post.content : ''}
                                onInit={(editor) => { editor.setData(props.post.content ? props.post.content : '') }}
                                onChange={props.handleCkeditorChange}
                            />
                            {
                                props.validation_errors.content != null ? (<div className="help-block">{props.validation_errors.content[0]}</div>) : null
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="box box-success">
                    <div className="box-body">
                        <div className={`input-group input-group-sm ${props.validation_errors.category_id ? 'has-error' : ''}`}>
                            <select name="category_id" id="category_id" className="form-control" onChange={props.handleFieldChange} value={props.post.category_id}>
                                <option value="">select category</option>
                                {
                                    props.all_categories.map(cat => {
                                        return (
                                            <option key={cat.id} value={cat.id}>{cat.title}</option>
                                        )
                                    })
                                }
                            </select>
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-info btn-flat" onClick={props.openAddCategoryModal}><i className="fa fa-plus"></i> Add new category</button>
                            </span>
                        </div>
                        {
                            props.validation_errors.category_id != null ? (<div className="help-block">{props.validation_errors.category_id[0]}</div>) : null
                        }
                        <br />
                        <div className="form-group">
                            <label>Tags</label>
                            <div>
                                {
                                    props.all_tags.map(tag => {
                                        return (
                                            <div className="checkbox" key={tag.id}>
                                                <label>
                                                    <input type="checkbox" name="tag[]" value={tag.id} onChange={props.handleFieldChange} checked={props.post.tags.includes(tag.id)} />
                                                    {tag.title}
                                                </label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button type="button" className="btn btn-info btn-flat" onClick={props.openAddTagModal}><i className="fa fa-plus"></i> Add new tag</button>
                        </div>
                        {
                            props.post.image_url ? (
                                <img src={props.post.image_url} width="100" height="80" />
                            ) : null
                        }
                        <div className={`form-group ${props.validation_errors.image ? 'has-error' : ''}`}>
                            <label>Image</label>
                            <input type="file" name="image" id="image" className="form-control" onChange={props.handleFieldChange} accept="image/*" />
                            {
                                props.validation_errors.image != null ? (<div className="help-block">{props.validation_errors.image[0]}</div>) : null
                            }
                        </div>

                        <div className="row">
                            <div className="col-md-6"><input type="button" name="publish" value="Publish" onClick={props.handleSave} className="btn btn-success" /></div>
                            <div className="col-md-6"><input type="button" name="savedraft" value="Save draft" onClick={props.handleSave} className="btn btn-default pull-right" /></div>
                            <input type="submit" ref={props.submitRef} style={{ display: 'none' }} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PostForm;
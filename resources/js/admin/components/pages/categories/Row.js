import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCategory } from '../../../store/actions/CategoryActions';

function Row(props) {



    const handleDelete = (e) => {
        e.preventDefault();

        if (confirm("Are you sure?")) {
            props.deleteCategory(props.category.id);
        }
    }

    return (
        <tr>
            <td>{props.category.id}</td>
            <td>{props.category.title}</td>
            <td>
                {props.category.slug}
            </td>
            <td>
                <Link to={'/admin/categories/edit/' + props.category.id} className="btn btn-info btn-sm"><i
                    className="fa fa-edit"></i></Link>
                <a href="#" className="btn btn-danger btn-sm" onClick={handleDelete}><i
                    className="fa fa-remove"></i></a>
            </td>
        </tr>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCategory: (id) => dispatch(deleteCategory(id))
    }
};

export default connect(null, mapDispatchToProps)(Row);
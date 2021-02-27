import React from 'react';
import { connect } from 'react-redux';

function PaginationItem(props) {


    const paginate = (e) => {
        e.preventDefault();

        props.onclick(props.page);
    }


    return props.show ? (
        <li className={props.active ? 'active' : ''}>
            <a href="#" onClick={paginate}>{props.title}</a>
        </li>
    ) : null;

}

const mapDispatchToProps = () => {

}



export default connect(null, mapDispatchToProps)(PaginationItem);
import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';

export default function Breadcrumb(props) {


    const prepareLinks = () => {
        let links = [{
            text: 'Dashboard',
            url: '/admin/',
            icon: 'fa fa-dashboard'
        }];

        if (props.location.pathname != '/admin/') {

            // split pathname using '/'
            let parts = props.location.pathname.split('/');

            // filter parts to exclude empty and numeric parts
            parts = parts.filter(val => val != "" && isNaN(val));

            // loop through parts and push in the links array
            for (let i = 0; i < parts.length; i++) {
                if (i == parts.length - 1) {
                    links.push({
                        text: parts[i].replace(/^\w/, c => c.toUpperCase()),
                        url: '#'
                    });
                } else {
                    links.push({
                        text: parts[i].replace(/^\w/, c => c.toUpperCase()),
                        url: '/' + parts[i]
                    });
                }
            }
        }

        return links;
    }

    return (
        <ol className="breadcrumb">
            {prepareLinks().map((link, index) => <BreadcrumbItem key={index} link={link} is_active={index === link.length - 1} />)}
        </ol>
    );
}


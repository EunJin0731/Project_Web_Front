import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class SubCategoryItem extends Component {
    render() {
        let {subCategory} = this.props;
        let product = `/product/subcategory/${subCategory.id}`;
        return (
            <Link to={product}>
                <li>{subCategory.name}</li>
            </Link>
        );
    }
};

export default SubCategoryItem;
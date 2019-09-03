import React, {Component } from 'react';
import {inject, observer} from "mobx-react";

import './product.scss';

@inject('stores')
@observer
class subCategoryItem extends Component {
    render() {
        let {product} = this.props;
        return (
            <div className='product-view'>
                <div><img src={`http://localhost:8080/product/image/${product.id}`}></img></div>
                <div>{product.name}</div>
                <div>{product.content}</div>
                <div>{product.price}</div>
            </div>
        );
    }
};

export default subCategoryItem;
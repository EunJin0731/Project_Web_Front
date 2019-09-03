import React, {Component} from 'react';
import "../Category/categoryItem.scss";
import "./product.scss";

import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class CategoryItem extends Component {
    render() {
        let {product} = this.props;
        return (
            <div className='ItemView'>
                <div><img src={`http://localhost:8080/product/image/${product.id}`}/></div>
                <div>{product.name}</div>
                <div>{product.content}</div>
                <div>{product.price}</div>
            </div>
        );
    }
}

export default CategoryItem;
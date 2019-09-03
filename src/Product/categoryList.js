import React, {Component} from 'react'
import {inject, observer} from "mobx-react";

import CategoryItem from "./categoryItem";

@inject('stores')
@observer
class CategoryList extends Component {
    componentDidMount() {
        this.props.stores.ProductStore.fetchItems(this.props.categoryId);
    }

    render() {
        return(
            <div>
                {this.props.stores.ProductStore.categoryItems &&
                this.props.stores.ProductStore.categoryItems.map(item => <CategoryItem key={item.id} product={item} />)}
            </div>
        );
    }
}

export default CategoryList;
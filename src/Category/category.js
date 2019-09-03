import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

import CategoryList from './categoryList';

@inject('stores')
@observer
class Category extends Component {
    componentDidMount() {
        this.props.stores.CategoryStore.fetchItems();
    }

    render() {
        let category = this.props.stores.CategoryStore;

        return (
            <div>
                {category.items && <CategoryList items={category.items}/> }
            </div>
        );
    }
}

export default Category;
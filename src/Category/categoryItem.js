import React, {Component } from 'react';
import {inject, observer} from "mobx-react";
import {Link} from 'react-router-dom';

import SubCategory from '../SubCategory/subcategory';

@inject('stores')
@observer
class CategoryItem extends Component {
    render() {
        let {category} = this.props;
        let subCategory = this.props.stores.SubCategoryStore;
        // let product = `/product/category/${category.id}`;
        // let product = `/subcategory/${category.id}`;
        let product = `/product/subcategory/${category.id}`;
        return (
            <div>
                <ul onClick={this.SubCategory}>
                    <Link to={product}> {category.name}</Link>
                    {subCategory.items && <SubCategory items={subCategory.items} categoryId={category.id} />}
                </ul>
            </div>
        );
    }
    SubCategory = async ()=> {
        let categoryId = this.props.category.id;
        await this.props.stores.SubCategoryStore.getSubItems(categoryId);
    };
}

export default CategoryItem;
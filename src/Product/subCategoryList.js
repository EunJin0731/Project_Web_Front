import React, {Component} from 'react'
import {inject, observer} from "mobx-react";

import SubCategory from './subCategoryItem';
import "./product.scss";


@inject('stores')
@observer
class SubCategoryList extends Component {

    componentDidMount() {
        this.props.stores.ProductStore.fetchSubItems(this.props.subId);
    }

    render() {
        return(
            <div>
                {this.props.stores.ProductStore.subItems &&
                this.props.stores.ProductStore.subItems.map(item => <SubCategory key={item.id} product={item} />)}
            </div>
        );
    }
}

export default SubCategoryList;
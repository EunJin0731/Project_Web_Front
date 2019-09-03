import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

import SubViewItem from './subCategoryItem';
import CategoryList from './categoryList';
import "./product.scss";

@inject('stores')
@observer
class Category extends Component {
    render() {
        if(this.props.match && this.props.match.params.command === 'subcategory' && this.props.match.params.param){
            return <SubViewItem subId={this.props.match.params.param}/>
        }
        else if(this.props.match && this.props.match.params.command === 'category' && this.props.match.params.param){
            return <CategoryList categoryId={this.props.match.params.param}/>
        }
        return (
            <div>

            </div>
        );
    }
}

export default Category;
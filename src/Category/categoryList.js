import React from 'react';
import CategoryItem from "./categoryItem";

const CategoryList = (props)=> {
    /*componentDidMount() {
        this.props.stores.CategoryStore.fetchCategoryItems(this.props.categoryId);
    }*/
    return (
        <div className='category_list'>
            {props.items.map(item => <CategoryItem key={item.id} category={item}/>)}
        </div>
    );
};

export default CategoryList;
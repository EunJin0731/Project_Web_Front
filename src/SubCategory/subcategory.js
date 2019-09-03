import React, {Component} from 'react';

import SubcategoryItem from "./subcategoryItem";
import './subcategory.scss';

const Subcategory = (props) => {
    return (
        <div>
            <div className='subCategory_Item'>
                {props.items.map(item => item.categoryId === props.categoryId && <SubcategoryItem key={item.id} subItem={item}/>)}
            </div>
        </div>
    );
}

export default Subcategory;
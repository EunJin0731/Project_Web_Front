import React, {Component} from 'react';
import "./product.scss";

class Product extends Component {
    render() {
        return (
            <div>
                <h1>제품이름</h1><br/>
                <span>제조사: </span><br/>
                <span>마일리지: </span><br/>
                <span>주문수량: </span><input type="text"/><br/>
                <span>시중가격: </span><br/>
                <span>판매가격: </span><br/>
                <button>쇼핑하기</button>
                <button>장바구니</button>
                <div>제품상세정보</div>
                <div>구매 정보</div>
                <div>고객의 상품 평</div>
            </div>
        );
    }
}

export default Product;
import React, {Component} from 'react';
import './basket.scss';

class Basket extends Component {
    render() {
        return (
            <div>
                <h1>장바구니</h1><br/>
                <p>☞ 고객님께서 주문하신 상품내역을 <span>변경</span>하시거나 <span>삭제</span>하실 수가 있습니다.</p>
                <p>☞ 계속주문을 원하시면 [쇼핑하기]을 클릭하세요.</p>
                <p>☞ 주문하신 상품에 대해 마일리지가 계속적으로 누적됩니다.</p>
                <p>☞ 마일리지의 누적점수에 따라 사은품이 적용되며 추후 주문 시 동봉하여 발송됩니다.</p>
                <br/> 주문단계 : <strong>장바구니</strong> >> 배송지 및 결제정보 >> 주문 완료 <br/>
                <ul>
                    <li className='item'>주문상품</li>
                    <li className='item'>가격</li>
                    <li className='item'>주문수</li>
                    <li className='item'>합계</li>
                    <li className='item'>삭제</li>
                </ul>
                <br/>
                <button>다시계산</button>     <button>삭제하기</button>
                <br/>
                <br/>
                <p>주문 총 가격: <span className='total'> </span>0<span>원</span><br/></p>
                <button>쇼핑하기</button>     <button>주문하기</button>
            </div>
        );
    }
}

export default Basket;
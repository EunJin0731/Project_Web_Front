import React, {Component} from 'react';
import './index.scss';
import {inject, observer} from "mobx-react";


@inject('stores')
@observer
class MyPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src="https://t1.daumcdn.net/cfile/tistory/277A7E3958AC572E34"></img><br/>
                    이름 홍길동<br/>
                    아이디 test<br/>
                    성별 남<br/>
                    나이 19세<br/><br/><br/><br/><br/>
                    게시물 추천 : 26<br/>
                    <button>수정</button>
                </div>
            </div>
        );
    }
}

export default MyPage;